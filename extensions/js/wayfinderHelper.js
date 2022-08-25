// eslint-disable-next-line no-unused-vars
function WayfinderHelper(renderer, ribbon) {
  const ActiveWaypointImage = 'activeWaypointImage';
  const ActiveWaypointLabel = 'activeWaypointLabel';
  const FirstStepScale = this.isPreview ? 0.003 : 0.005;

  /** @type {number|undefined} */
  this.minSteps = ribbon !== undefined && ribbon.minSteps !== undefined ? ribbon.minSteps : 5;

  /** @type {number|undefined} */
  this.maxSteps = ribbon !== undefined && ribbon.maxSteps !== undefined ? ribbon.maxSteps : 50;

  /** @type {number|undefined} */
  this.stepsPerMeter = ribbon !== undefined && ribbon.stepsPerMeter !== undefined ? ribbon.stepsPerMeter : 5;

  /** @type {Color} */
  this.color = ribbon !== undefined && ribbon.color !== undefined ? ribbon.color : undefined;

  /** @type {Color} */
  this.baseColor = this.color; // in case we override it

  /** @type {string} */
  this.stepModelSrc = ribbon !== undefined && ribbon.stepModelSrc !== undefined ? ribbon.stepModelSrc : undefined;

  /** @type {boolean} */
  this.showLabels = ribbon !== undefined && ribbon.showLabels !== undefined ? ribbon.showLabels : true;

  /** @type {boolean} */
  this.isSlowDevice = isSlowDevice();

  /** @type {boolean} */
  this.wasDrawing = false;

  /** @type {boolean} */
  this.showRibbon = false;

  /** @type {boolean} */
  this.isWaypointImageVisible = false;

  /** @type {boolean} */
  this.hasLabel = false;

  /**
   * Camera location
   * @type {Location}
   */
  this.cameraLocation = { position: undefined, gaze: undefined, up: undefined };

  /**
   * Waypoint location
   * @type {Location}
   */
  this.waypointLocation = { position: undefined, gaze: undefined, up: undefined };

  this.callback = undefined;

  /** @type {number} */
  this.eventRadius = 0.5;

  /** @type {number} */
  this.selectedPoiId = undefined;

  /**
   * true, if user is inside the eventRadius radius of the current waypoint.
   * @type {boolean}
   * */
  this.isInsideEventRadius = false;

  /** @type {boolean} */
  this.isInsideWayfinderDisplayBoundary = false;

  /** @type {function(sender: object, distanceToWaypoint: number, waypointId: number)} */
  this.entered = undefined;

  /** @type {function(sender: object, distanceToWaypoint: number, waypointId: number)} */
  this.exited = undefined;

  /** @type {function(sender: object, distanceToWaypoint: number, waypointId: number)} */
  this.wayfinderDisplayBoundaryEnter = undefined;

  /** @type {function(sender: object, distanceToWaypoint: number, waypointId: number)} */
  this.wayfinderDisplayBoundaryExit = undefined;

  /** @type {boolean} */
  this.isPreview =
    window.thingworxview &&
    window.thingworxview.configuration &&
    window.thingworxview.configuration.platform === 'preview';

  /** @type {number} */
  this.deviceThrottleCount = -1;
  this.modelTranslationCache = [];
  this.hiddenSphereCache = [];

  // we are initialised asynchronously, so we need the caller to pass in
  // certain 'capabilities; e.g. the renderer
  this.renderer = renderer;

  /**
   * true, if running on android or windows
   * @returns {boolean}
   */
  function isSlowDevice() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    let isPreview = window.thingworxview.configuration.platform === 'preview';

    let isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    return !(isPreview || isIOS);
  }

  /**
   * Sets a new color for the wayfinder ribbon.
   * Updates the shader used for rendering the spheres.
   * @param {Color} newColor
   */
  this.setColor = function (newColor) {
    this.color = newColor !== undefined ? newColor : this.baseColor;

    // this shader is the same for all, so calculate this once
    this.sphereShader =
      this.color !== undefined
        ? 'navfogged;r f ' + this.color[0] + ';g f ' + this.color[1] + ';b f ' + this.color[2]
        : 'navfogged';
  };

  /**
   * @param {number} index
   */
  this.setSelectedPoiId = function (index) {
    this.selectedPoiId = index;
    this.isInsideEventRadius = false;
  };

  /**
   * Set the target location of the wayfinder to the given location.
   * @param {Locator} newLocator
   */
  this.setTargetLocation = function (newLocator) {
    if (newLocator !== undefined) {
      this.waypointLocation = {
        position: newLocator.position,
        gaze: newLocator.gaze,
        up: newLocator.up,
        label: newLocator.label,
      };
      this.setColor(newLocator.color);

      // update the waypoint image and label
      this.setupWaypoint(this.waypointLocation.position, newLocator.label);
    }
  };

  this.setRootView = function (rootView) {
    this.rootView = rootView;
  };

  /**
   * @param {Location} cameraLocation
   */
  this.triggerEvents = function (cameraLocation) {
    this.cameraLocation = cameraLocation;

    /** @type {number} */
    const distanceToWaypoint = this.getCameraDistanceToWaypoint();

    if (distanceToWaypoint > this.wayfinderDisplayBoundary) {
      if (this.isInsideWayfinderDisplayBoundary !== false && this.wayfinderDisplayBoundaryExit) {
        this.wayfinderDisplayBoundaryExit(this, distanceToWaypoint, this.selectedPoiId);
      }

      this.isInsideWayfinderDisplayBoundary = false;
    } else {
      if (this.isInsideWayfinderDisplayBoundary !== true && this.wayfinderDisplayBoundaryEnter) {
        this.wayfinderDisplayBoundaryEnter(this, distanceToWaypoint, this.selectedPoiId);
      }

      this.isInsideWayfinderDisplayBoundary = true;
    }

    if (distanceToWaypoint < this.eventRadius && !this.isInsideEventRadius && this.entered !== undefined) {
      this.isInsideEventRadius = true;
      this.entered(this, distanceToWaypoint, this.selectedPoiId);
    }
    // Checking if moving out of the eventRadius region
    else if (distanceToWaypoint >= this.eventRadius && this.isInsideEventRadius && this.exited !== undefined) {
      this.isInsideEventRadius = false;
      this.exited(this, distanceToWaypoint, this.selectedPoiId);
    }
  };

  /**
   * @param {Location} cameraLocation
   * @param {boolean} shouldDrawRibbon
   * @param {boolean} shouldDrawWaypoint
   */
  this.draw = function (cameraLocation, shouldDrawRibbon, shouldDrawWaypoint) {
    this.cameraLocation = cameraLocation;

    const distanceToWaypoint = this.getCameraDistanceToWaypoint();

    this.showRibbon = shouldDrawRibbon;

    const shouldDraw = shouldDrawRibbon || shouldDrawWaypoint;
    if (!this.wasDrawing && !shouldDraw) {
      // If we were already not drawing last call,
      // then we have already hidden all components and therefore do not need to do anything here.
      return;
    }
    this.wasDrawing = shouldDraw;

    this.isWaypointImageVisible = shouldDrawWaypoint;
    this.drawWaypoint(distanceToWaypoint);

    // draw the whole ribbon if we are beyond the wayfinderDisplayBoundary, otherwise draw only a single point
    if (distanceToWaypoint > this.wayfinderDisplayBoundary) {
      this.drawRibbon(cameraLocation);
    } else {
      this.drawWaypointSphere(distanceToWaypoint);
    }
  };

  /**
   * Check if the waypoint is seen by the camera.
   * @param {Camera3D} camera ThingView camera
   * @returns {{waypointSeenByCamera: boolean, waypointBehindCamera: boolean}} Two booleans determining if the waypoint is within the
   * camera frustum and if it is behind the camera.
   */
  this.IsWaypointSeenByCamera = function (camera) {
    let worldToCameraMatrix = this.GetWorldToCameraMatrix();
    let perspectiveProjectionMatrix = this.GetPerspectiveProjectionMatrix(camera);
    return this.isWaypointSeenByCamera(perspectiveProjectionMatrix, worldToCameraMatrix);
  };

  /**
   * Check if the waypoint is seen by the camera.
   * @param perspectiveProjectionMatrix Matrix4 that applies perspective projection to a 3d point in camera coordinates.
   * @param worldToCameraMatrix Matrix4 that moves point from world to camera coordinate system.
   * @returns {{waypointSeenByCamera: boolean, waypointBehindCamera: boolean}} Two booleans determining if the waypoint is within the
   * camera frustum and if it is behind the camera.
   */
  this.isWaypointSeenByCamera = function (perspectiveProjectionMatrix, worldToCameraMatrix) {
    let cameraFrustum = this.CreateCameraFrustum(perspectiveProjectionMatrix, worldToCameraMatrix);
    let planes = cameraFrustum.planes;

    // Check near plane separately to determine if waypoint is behind camera
    let nearPlane = planes[5];
    let waypointBehindCamera = nearPlane.distanceToPoint(this.waypointLocation.position) < 0;
    let waypointSeenByCamera = !waypointBehindCamera;

    // Check for each of the cardinal direction frustum planes.
    // Far plane (4) gets ignored - if point is far away but in the viewing direction we want to consider it still seen
    // Near plane (5) is already considered before in 'waypointBehindCamera'
    for (let i = 0; i < 4; i++) {
      let distanceToPoint = planes[i].distanceToPoint(this.waypointLocation.position);
      if (distanceToPoint < 0) {
        waypointSeenByCamera = false;
        break;
      }
    }
    return { waypointSeenByCamera, waypointBehindCamera };
  };

  /**
   * Get a Vector2 that can be used to place 2d indicator for off-screen waypoints.
   * @param worldToCameraMatrix Matrix4 that moves point from world to camera coordinate system.
   * @returns {Vector2} Vector2 with its values between -1 - 1 that indicates the screen position.
   */
  this.GetOffScreenIndicationVector = function (worldToCameraMatrix) {
    let waypointInCameraSpace = this.waypointLocation.position.clone().applyMatrix4(worldToCameraMatrix);
    let waypointIn2D = new THREE.Vector2(waypointInCameraSpace.x, waypointInCameraSpace.y);
    let strongerValue = Math.abs(waypointIn2D.x) > Math.abs(waypointIn2D.y) ? waypointIn2D.x : waypointIn2D.y;
    // This ensures that the vector only uses values between -1 and 1, so that it is usable for screen space
    return waypointIn2D.clone().multiplyScalar(1 / Math.abs(strongerValue));
  };

  /**
   * Create a threeJS frustum for the given camera projection matrix.
   * @param perspectiveProjectionMatrix Perspective projection matrix of the camera for which to create a frustum for.
   * @param worldToCameraMatrix Matrix4 that moves point from world to camera coordinate system.
   * @returns {Frustum} Frustum that can be used for intersections.
   */
  this.CreateCameraFrustum = function (perspectiveProjectionMatrix, worldToCameraMatrix) {
    let cameraMatrix = new THREE.Matrix4().multiplyMatrices(perspectiveProjectionMatrix, worldToCameraMatrix);

    let cameraFrustum = new THREE.Frustum();
    cameraFrustum.setFromProjectionMatrix(cameraMatrix);

    return cameraFrustum;
  };

  /**
   * Get the perspective projection matrix for the given camera.
   * @param {Camera3D} camera ThingView camera to create projection Matrix for (only available in preview).
   * @returns {Matrix4} Matrix4 that moves point from camera to world coordinate system.
   */
  this.GetPerspectiveProjectionMatrix = function (camera) {
    let perspectiveProjectionMatrix;

    if (camera) {
      let near = camera.GetNearClip();
      let far = camera.GetFarClip();
      let perspectiveProjectionValues = camera.GetViewProjection();

      perspectiveProjectionMatrix = new THREE.Matrix4().makePerspective(
        perspectiveProjectionValues.left / 8,
        perspectiveProjectionValues.right / 8,
        perspectiveProjectionValues.bottom / 8,
        perspectiveProjectionValues.top / 8,
        near,
        far
      );
    } else {
      perspectiveProjectionMatrix = new THREE.Matrix4().makePerspective(
        -0.5 / 8,
        0.5 / 8,
        -0.5 / 8,
        0.5 / 8,
        0.125,
        32
      );
    }

    return perspectiveProjectionMatrix;
  };

  /**
   * Get the world to camera matrix for the given camera.
   * @returns {Matrix4} World to camera matrix (rotation & translation).
   */
  this.GetWorldToCameraMatrix = function () {
    let position = this.cameraLocation.position;

    let up = this.cameraLocation.up;
    let gaze = this.cameraLocation.gaze;
    let right = up.clone().cross(gaze);

    const worldToCameraMatrix = new THREE.Matrix4();
    worldToCameraMatrix.set(
      -right.x,
      up.x,
      -gaze.x,
      0,
      right.y,
      up.y,
      -gaze.y,
      0,
      -right.z,
      up.z,
      -gaze.z,
      0,
      0,
      0,
      0,
      1
    );
    worldToCameraMatrix.setPosition(new THREE.Vector3(position.x, position.y, position.z));

    return worldToCameraMatrix.invert();
  };

  /**
   * Sets the eventRadius distance.
   * @param eventRadius The eventRadius distance.
   * @param wayfinderDisplayBoundary The distance where the user is near the waypoint, the ribbon is only shown as a single dot and the overlay is hidden
   * @constructor
   */
  this.setEventRadiusAndDisplayBoundary = function (eventRadius, wayfinderDisplayBoundary) {
    this.eventRadius = eventRadius !== undefined ? eventRadius : 0.5;
    this.wayfinderDisplayBoundary = Math.max(
      wayfinderDisplayBoundary !== undefined ? wayfinderDisplayBoundary : this.eventRadius * 4,
      this.eventRadius
    );
  };

  /**
   * Sets the eventRadius distance.
   * sender, distanceToWaypoint
   * @param {function(sender: object, distanceToWaypoint: number, waypointId: number)} enter Callback function for entering the eventRadius region.
   * @param {function(sender: object, distanceToWaypoint: number, waypointId: number)} exit Callback function for exiting the eventRadius region.
   * @param {function(sender: object, distanceToWaypoint: number, waypointId: number)} wayfinderDisplayBoundaryEnter Callback function for entering the wayfinderDisplayBoundary around the waypoint.
   * @param {function(sender: object, distanceToWaypoint: number, waypointId: number)} wayfinderDisplayBoundaryExit Callback function for exiting the wayfinderDisplayBoundary around the waypoint.
   * @constructor
   */
  this.setEventHandlers = function (enter, exit, wayfinderDisplayBoundaryEnter, wayfinderDisplayBoundaryExit) {
    this.entered = enter;
    this.exited = exit;
    this.wayfinderDisplayBoundaryEnter = wayfinderDisplayBoundaryEnter;
    this.wayfinderDisplayBoundaryExit = wayfinderDisplayBoundaryExit;
  };

  /**
   *
   * @param {THREE.Vector3} position
   * @param {string} label
   */
  this.setupWaypoint = function (position, label) {
    this.hasLabel = label !== undefined && label.length > 0;

    let waypointLabel = document.getElementById(ActiveWaypointLabel);
    if (this.hasLabel) {
      waypointLabel.setAttribute('text', label);
      this.renderer.setProperties(ActiveWaypointLabel, {
        billboard: true,
        decal: true,
      });
    }

    this.setShowLabels(this.showLabels);

    let waypointImage = document.getElementById(ActiveWaypointImage);
    waypointImage.setAttribute('x', position.x);
    waypointImage.setAttribute('y', position.y);
    waypointImage.setAttribute('z', position.z);
    this.isWaypointImageVisible = false;

    this.renderer.setTranslation(ActiveWaypointImage, position.x, position.y, position.z);
    this.renderer.setProperties(ActiveWaypointImage, {
      billboard: true,
      decal: true,
    });
  };

  /**
   * @param {boolean} showLabels
   */
  this.setShowLabels = function (showLabels) {
    this.showLabels = showLabels;

    if (this.cameraLocation.position) {
      const distanceToWaypoint = this.getCameraDistanceToWaypoint();
      this.drawWaypoint(distanceToWaypoint);
    }
  };

  /**
   * @param {number} distanceToWaypoint
   */
  this.drawWaypoint = function (distanceToWaypoint) {
    const waypointPos = this.waypointLocation.position;

    const waypointScale = Math.max(0.2, Math.min(0.5 * distanceToWaypoint, 10));

    this.renderer.setProperties(ActiveWaypointImage, {
      hidden: !this.isWaypointImageVisible,
      billboard: true,
      decal: true,
    });

    this.renderer.setProperties(ActiveWaypointLabel, {
      hidden: !this.isWaypointImageVisible || !(this.hasLabel && this.showLabels),
      billboard: true,
      decal: true,
    });

    if (this.isWaypointImageVisible) {
      this.renderer.setScale(ActiveWaypointImage, waypointScale, waypointScale, waypointScale);
    }

    if (this.hasLabel) {
      this.renderer.setTranslation(
        ActiveWaypointLabel,
        waypointPos.x,
        waypointPos.y + 0.08 * waypointScale,
        waypointPos.z
      );
      this.renderer.setScale(ActiveWaypointLabel, waypointScale, waypointScale, waypointScale);
    }
  };

  function getDistanceToFirstStep(offsetFromCamera, cameraPosition) {
    return offsetFromCamera.distanceTo(cameraPosition);
  }

  function getOffsetFromCamera(cameraPosition, cameraGaze) {
    // the position to start drawing the ribbon from
    return cameraPosition.clone().add(cameraGaze);
  }

  this.drawRibbon = function () {
    /** @type {THREE.Vector3} */
    const waypointPosition = this.waypointLocation.position;

    /** @type {THREE.Vector3} */
    const cameraPosition = this.cameraLocation.position;
    const cameraGaze = this.cameraLocation.gaze.normalize();

    const offsetFromCamera = getOffsetFromCamera(cameraPosition, cameraGaze);
    const waypointGaze = this.waypointLocation.gaze.normalize();

    /** @type {number} */
    const bendFactor = this.calculateBezierBendFactor(waypointPosition, waypointGaze, offsetFromCamera);

    const bezierPoints = this.getBezierControlPoints(
      offsetFromCamera.clone(),
      cameraGaze.clone(),
      waypointPosition.clone(),
      waypointGaze.clone(),
      bendFactor
    );

    const arcLength = this.getBezierCurveApproximateArcLength(
      offsetFromCamera,
      bezierPoints.p1,
      bezierPoints.p2,
      waypointPosition
    );
    const currentSteps = this.getStepCountToDraw(arcLength);
    for (let i = 0; i < currentSteps; i++) {
      /** @type {THREE.Vector3} */
      const stepPosition = this.getPointOnBezierCurve(
        offsetFromCamera,
        bezierPoints.p1,
        bezierPoints.p2,
        waypointPosition,
        i / (currentSteps - 1)
      );

      const currentStepDistance = stepPosition.distanceTo(cameraPosition);
      const distanceToFirstStep = getDistanceToFirstStep(offsetFromCamera, cameraPosition);
      const currentStepScale = FirstStepScale * (currentStepDistance / distanceToFirstStep);
      this.drawSphere(i, stepPosition, this.sphereShader, currentStepScale);
    }

    // Hide ribbon sphere objects that are not drawn above.
    for (let i = currentSteps; i < this.maxSteps; i++) {
      this.hideSphere(i);
    }
  };

  /**
   * @param {number} distanceToWaypoint
   */
  this.drawWaypointSphere = function (distanceToWaypoint) {
    const cameraPosition = this.cameraLocation.position;
    const cameraGaze = this.cameraLocation.gaze.normalize();
    const offsetFromCamera = getOffsetFromCamera(cameraPosition, cameraGaze);
    const distanceToFirstStep = getDistanceToFirstStep(offsetFromCamera, cameraPosition);
    const scale = FirstStepScale * (distanceToWaypoint / distanceToFirstStep);

    // draw the last single sphere at the waypoint position
    this.drawSphere(this.maxSteps - 1, this.waypointLocation.position, this.sphereShader, scale);

    // Hide all other spheres
    for (let i = 0; i < this.maxSteps - 1; i++) {
      this.hideSphere(i);
    }
  };

  /**
   * Get the distance between the current waypoint and the camera.
   * @returns {number} Distance from the camera to the waypoint.
   */
  this.getCameraDistanceToWaypoint = function () {
    return this.cameraLocation.position.distanceTo(
      // This is set to cameras y position on purpose see https://vuforia.atlassian.net/browse/STUD-2699?focusedCommentId=368599
      new THREE.Vector3(
        this.waypointLocation.position.x,
        this.cameraLocation.position.y,
        this.waypointLocation.position.z
      )
    );
  };

  /**
   * @param {THREE.Vector3} waypointPosition
   * @param {THREE.Vector3} waypointGaze
   * @param {THREE.Vector3} offsetFromCamera
   * @returns {number}
   */
  this.calculateBezierBendFactor = function (waypointPosition, waypointGaze, offsetFromCamera) {
    let startToEndDir = waypointPosition.clone().sub(offsetFromCamera).normalize();
    let dot = waypointGaze.dot(startToEndDir);
    let alignment = Math.min(Math.max(0.5 + dot * 0.5, 0), 1);
    const minPull = 0.05;
    const maxPull = 0.5;
    return alignment * minPull + (1 - alignment) * maxPull;
  };

  /**
   * @param {THREE.Vector3} start
   * @param {THREE.Vector3} startDir
   * @param {THREE.Vector3} end
   * @param {THREE.Vector3} endDir
   * @param {number} bendFactor
   * @returns {{p1: THREE.Vector3, p2: THREE.Vector3}}
   */
  this.getBezierControlPoints = function (start, startDir, end, endDir, bendFactor) {
    let d = end.distanceTo(start);
    let p1 = start.add(startDir.normalize().multiplyScalar(bendFactor * d));
    let p2 = end.sub(endDir.normalize().multiplyScalar(bendFactor * d));

    return { p1, p2 };
  };

  /**
   * @param {number} index
   * @param {THREE.Vector3} position
   * @param {string} shader
   * @param {number} scale
   */
  this.drawSphere = function (index, position, shader, scale) {
    const img = 'tunnel' + index;

    let positionXFixed = parseFloat(position.x.toFixed(3));
    let positionYFixed = parseFloat(position.y.toFixed(3));
    let positionZFixed = parseFloat(position.z.toFixed(3));
    let scaleFixed = parseFloat(scale.toFixed(5));
    if (
      this.modelTranslationCache[index] &&
      this.modelTranslationCache[index][0] === positionXFixed &&
      this.modelTranslationCache[index][1] === positionYFixed &&
      this.modelTranslationCache[index][2] === positionZFixed &&
      this.modelTranslationCache[index][3] === scaleFixed &&
      this.modelTranslationCache[index][4] === this.showRibbon
    ) {
      return;
    }

    this.modelTranslationCache[index] = [positionXFixed, positionYFixed, positionZFixed, scaleFixed, this.showRibbon];

    this.renderer.setProperties(img, {
      shader: shader,
      hidden: !this.showRibbon,
    });
    this.hiddenSphereCache[index] = false;
    if (this.showRibbon) {
      this.renderer.setTranslation(img, position.x, position.y, position.z);
      this.renderer.setScale(img, scale, scale, scale);
    }
  };

  /**
   * @param {number} index
   */
  this.hideSphere = function (index) {
    const img = 'tunnel' + index;
    if (this.hiddenSphereCache[index]) {
      // Sphere was already hidden
      return;
    }
    this.renderer.setProperties(img, {
      hidden: true,
    });
    this.hiddenSphereCache = true;
  };

  /**
   * Returns a point on the bezier curve defined with the formula:
   * B(t) = (1-t)^3.P0 + 3t(1-t)^2.P1 + 3t^2.(1-t).P2 + t^3.P3,
   * @param {THREE.Vector3} p0 Start point
   * @param {THREE.Vector3} p1 1st control point
   * @param {THREE.Vector3} p2 2nd control point
   * @param {THREE.Vector3} p3 End point
   * @param {number} t
   * @returns {THREE.Vector3}
   */
  this.getPointOnBezierCurve = function (p0, p1, p2, p3, t) {
    const omt = 1 - t;
    const omt2 = omt * omt;
    const omt3 = omt * omt2;
    const t2 = t * t;
    const t3 = t * t2;

    let stepPosition = p0
      .clone()
      .multiplyScalar(omt3)
      .add(p1.clone().multiplyScalar(3 * omt2 * t))
      .add(p2.clone().multiplyScalar(3 * t2 * omt))
      .add(p3.clone().multiplyScalar(t3));
    return stepPosition;
  };

  /**
   * Calculates and returns approximate arc length of the bezier curve.
   * @param {THREE.Vector3} p0 Start point
   * @param {THREE.Vector3} p1 1st control point
   * @param {THREE.Vector3} p2 2nd control point
   * @param {THREE.Vector3} p3 End point
   * @returns {number} Approximate arc length
   */
  this.getBezierCurveApproximateArcLength = function (p0, p1, p2, p3) {
    let controlNetLength = p0.distanceTo(p1) + p1.distanceTo(p2) + p2.distanceTo(p3);
    let chordLength = p0.distanceTo(p3);

    return (controlNetLength + chordLength) / 2;
  };

  /**
   * Returns the number of steps to draw based on the distance to the waypoint.
   * @param {number} arcLength Length of the bezier curve
   * @returns {number} Number of steps to draw
   */
  this.getStepCountToDraw = function (arcLength) {
    let currentSteps = Math.round(arcLength * this.stepsPerMeter);
    currentSteps = Math.max(this.minSteps, currentSteps);
    currentSteps = Math.min(this.maxSteps, currentSteps);
    return currentSteps;
  };

  // Do not delete. This is called in twxDtWayfinder.design.js
  this.ribbonSphereObjects = (function (obj) {
    //Create the step objects. This function is only called once during
    //the lifetime of the wayfinder.
    const shapes = [];
    for (let i = 0; i < obj.maxSteps; i++) {
      shapes.push({ name: 'tunnel' + i, src: obj.stepModelSrc });
    }
    return shapes;
  })(this);
}

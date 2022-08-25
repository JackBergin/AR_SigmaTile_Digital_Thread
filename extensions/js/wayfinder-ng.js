if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'wayfinder-ng';
}

/**
 * @typedef {number[]} Color
 */

/**
 * @typedef {{color: Color, gaze: Vector3, position: Vector3, up: Vector3, label: string}} Locator
 */

/**
 * A number, or a string containing a number.
 * @typedef {{gaze: THREE.Vector3, position: THREE.Vector3, up: THREE.Vector3}} Location
 */

/**
 * The projection used by a camera.
 * @typedef {Object} ViewProjection
 * @property {number} left - The location of the left edge of the view port.
 * @property {number} right - The location of the right edge of the view port.
 * @property {number} top - The location of the top edge of the view port.
 * @property {number} bottom - The location of the bottom edge of the view port.
 * @property {number} depth - For perspective projections the normal distance from the origin to the view plane. Ignored in orthographic
 * @property {bool} ortho - If 'true' an orthographic projection, otherwise a perspective transform.
 */

/**
 * The representation of a 3D Camera.
 * @typedef {Object} Camera3D
 * @property {function():number} GetNearClip - Get the near clip distance.
 * @property {function():number} GetFarClip - Get the far clip distance.
 * @property {function():ViewProjection} GetViewProjection - Get the projection used by a camera.
 */

(function () {
  'use strict';

  let navigatorModule = angular.module('wayfinder-ng', []);
  navigatorModule.directive('ngWayfinder', ['$timeout', '$interval', '$http', '$window', '$injector', ngWayfinder]);

  function ngWayfinder($timeout, $interval, $http, $window, $injector) {
    return {
      restrict: 'EA',
      scope: {
        idField: '@',
        ribboncolorField: '@',
        stepmodelsrcField: '@',
        enabledField: '=',
        reticlevisibleField: '@',
        isholoField: '@',
        eventradiusField: '@',
        wayfinderdisplayboundaryField: '@',
        poidataField: '=',
        selectedwaypointvalueField: '=',
        poiField: '=',
        autoadvanceField: '@',
        showlabelsField: '@',
        delegateField: '=',
      },
      template: '<div></div>',
      link: function (scope, element, attr) {
        scope.$root.wayfinderReticleVisibility = true;
        scope.$root.wayfinderOffscreenIndicatorVisibility = false;

        scope.data = {
          id: undefined,
          poiData: undefined,
          selectedPoiId: -1,
          force: false,
          isholo: false,
          eventRadius: 0.5,
          wayfinderDisplayBoundary: 2,
          wayfinder: undefined,
          cameraLocation: undefined,
          ribbonColor: undefined,
          stepModelSrc: undefined,
          enabled: undefined,
          reticleVisible: undefined,
          pending: undefined,
          ready: false,
          autoAdvance: false,
          showLabels: true,
        };

        scope.renderer = $window.cordova ? vuforia : $injector.get('threeJsTmlRenderer');

        let init = function () {
          scope.$root.wayfinderReticleVisibility = false;
          let isPreview =
            window.thingworxview &&
            window.thingworxview.configuration &&
            window.thingworxview.configuration.platform === 'preview';

          const minSteps = isPreview ? 10 : 2;
          const maxSteps = isPreview ? 50 : 25;
          const stepsPerMeter = isPreview ? 10 : 5;

          let ribbon = {
            color: scope.data.ribbonColor,
            stepModelSrc: scope.data.stepModelSrc,
            hololens: scope.data.isholo,
            minSteps: minSteps,
            maxSteps: maxSteps,
            stepsPerMeter: stepsPerMeter,
            showLabels: scope.data.showLabels,
          };

          scope.data.wayfinder = new WayfinderHelper(scope.renderer, ribbon);
          scope.data.wayfinder.setRootView(scope.$root.rootView);
          scope.data.wayfinder.setEventHandlers(
            scope.entered,
            scope.exited,
            scope.wayfinderDisplayBoundaryEntered,
            scope.wayfinderDisplayBoundaryExited
          );
          scope.data.wayfinder.setEventRadiusAndDisplayBoundary(
            scope.data.eventRadius,
            scope.data.wayfinderDisplayBoundary
          );

          scope.$root.wayfinderHelper = scope.data.wayfinder;
          scope.data.wayfinder.deviceThrottleCount = -1;
          scope.$root.wayfinderWaypointVisibility = false;
          scope.$root.wayfinderRibbonVisibility = false;
          scope.$root.wayfinderOffscreenIndicatorVisibility = false;
          if (scope.data.ready) {
            scope.setSelected();
          }
        };

        let lastTimestamp = -1;

        function UpdateWayfinder(arg) {
          if (scope.data.ready) {
            if (arg.timestamp !== undefined && arg.timestamp < lastTimestamp) {
              return;
            }
            lastTimestamp = arg.timestamp;
            /** @type {Location} */
            scope.data.cameraLocation = {
              position: ConvertArrayToVector3(arg.position),
              gaze: ConvertArrayToVector3(arg.gaze),
              up: ConvertArrayToVector3(arg.up),
              timestamp: arg.timestamp,
            };
          }

          // For slow devices (Android/Windows) we execute only every 11th call for performance reasons
          if (scope.data.wayfinder.isSlowDevice) {
            if (scope.data.wayfinder.deviceThrottleCount === 10) {
              scope.data.wayfinder.deviceThrottleCount = -1;
            }

            scope.data.wayfinder.deviceThrottleCount++;

            if (scope.data.wayfinder.deviceThrottleCount !== 0) {
              return;
            }
          }

          if (scope.data.ready && scope.data.enabled) {
            executeNavigation();
          }
        }

        // we are mainly driven by the external clock which is the renderer location callback
        scope.$root.$on('tracking', function (evt, arg) {
          UpdateWayfinder(arg);
        });

        scope.$root.$on('trackingacquired', function (evt, arg) {
          scope.trackingacquired = true;
          if (scope.data.wayfinder) {
            scope.data.enabled = true;
          }
          scope.$root.wayfinderReticleVisibility = scope.data.reticleVisible;
          executeNavigation();
        });

        scope.$root.$on('trackinglost', function (evt, arg) {
          scope.trackingacquired = false;
          if (scope.data.wayfinder) {
            scope.data.enabled = false;
          }
          scope.$root.wayfinderReticleVisibility = false;
        });

        /**
         * Converts an array containing 3 elements into a THREE.Vector3
         * @param {number[]} array
         * @returns {THREE.Vector3}
         * @constructor
         */
        let ConvertArrayToVector3 = function (array) {
          return new THREE.Vector3(array[0], array[1], array[2]);
        };

        function draw() {
          if (!scope.data.wayfinder) {
            return;
          }
          scope.data.wayfinder.draw(
            scope.data.cameraLocation,
            scope.$root.wayfinderRibbonVisibility,
            scope.$root.wayfinderWaypointVisibility
          );
        }

        let executeNavigation = function () {
          if (scope.data.cameraLocation === undefined || scope.data.wayfinder === undefined) {
            return;
          }

          scope.data.wayfinder.triggerEvents(scope.data.cameraLocation);
          updateWayfinderVisibilities(true);
          draw();

          if (scope.$root.wayfinderOffscreenIndicatorVisibility) {
            drawOffscreenIndicator();
          }
        };

        let updateWayfinderVisibilities = function (shouldApply) {
          if (scope.data.cameraLocation === undefined || scope.data.wayfinder === undefined) {
            scope.$root.wayfinderReticleVisibility = false;
            scope.$root.wayfinderOffscreenIndicatorVisibility = false;
            return;
          }

          /** @type {Camera3D} */
          let camera = $window.cordova ? undefined : scope.$root.rootView.GetCamera(0);
          let { waypointSeenByCamera, waypointBehindCamera } = scope.data.wayfinder.IsWaypointSeenByCamera(camera);
          let newOffscreenVisibility = scope.$root.wayfinderOffscreenIndicatorVisibility;
          if (!scope.data.enabled) {
            scope.$root.wayfinderReticleVisibility = false;
            scope.$root.wayfinderRibbonVisibility = false;
            newOffscreenVisibility = false;
            scope.$root.wayfinderWaypointVisibility = false;
          } else if (ShouldShowOffScreenIndicator()) {
            newOffscreenVisibility = true;
            scope.$root.wayfinderReticleVisibility = false;
            scope.$root.wayfinderRibbonVisibility = false;
            scope.$root.wayfinderWaypointVisibility = false;
          } else if (scope.$root.wayfinderDisplayBoundaryReached) {
            scope.$root.wayfinderReticleVisibility = false;
            scope.$root.wayfinderRibbonVisibility = false;
            newOffscreenVisibility = false;
            scope.$root.wayfinderWaypointVisibility = true;
          } else {
            scope.$root.wayfinderReticleVisibility = scope.data.reticleVisible;
            scope.$root.wayfinderRibbonVisibility = true;
            newOffscreenVisibility = false;
            scope.$root.wayfinderWaypointVisibility = true;
          }

          // apply should only be called if we are outside of the angular cycle
          // to avoid this issue https://code.angularjs.org/1.5.3/docs/error/$rootScope/inprog?p0=$digest
          if (shouldApply && newOffscreenVisibility !== scope.$root.wayfinderOffscreenIndicatorVisibility) {
            scope.$root.$apply(function () {
              scope.$root.wayfinderOffscreenIndicatorVisibility = newOffscreenVisibility;
            });
          } else {
            scope.$root.wayfinderOffscreenIndicatorVisibility = newOffscreenVisibility;
          }

          function ShouldShowOffScreenIndicator() {
            return waypointBehindCamera || (!waypointSeenByCamera && scope.$root.wayfinderDisplayBoundaryReached);
          }
        };

        function drawOffscreenIndicator() {
          scope.setOffScreenIndicator(
            scope.data.wayfinder.GetOffScreenIndicationVector(scope.data.wayfinder.GetWorldToCameraMatrix())
          );
        }

        scope.setOffScreenIndicator = function (offScreenIndicatorVector) {
          let offscreenIndicatorLeft = 50 + offScreenIndicatorVector.x * 45;
          let offscreenIndicatorTop = 50 - offScreenIndicatorVector.y * 45;

          // Rotation value is based on the side the icon is on plus the lesser of the two values times 45
          let rotationValue = 0;
          if (offScreenIndicatorVector.x > 0.99) {
            rotationValue = -90 - 45 * offScreenIndicatorVector.y;
          } else if (offScreenIndicatorVector.x < -0.99) {
            rotationValue = 90 + 45 * offScreenIndicatorVector.y;
          } else if (offScreenIndicatorVector.y > 0.99) {
            rotationValue = 180 + 45 * offScreenIndicatorVector.x;
          } else if (offScreenIndicatorVector.y < -0.99) {
            rotationValue = -45 * offScreenIndicatorVector.x;
          }
          scope.$root.$apply(function () {
            scope.$root.wayfinderOffscreenIndicatorLeft = offscreenIndicatorLeft.toString() + '%';
            scope.$root.wayfinderOffscreenIndicatorTop = offscreenIndicatorTop.toString() + '%';
            scope.$root.wayfinderOffscreenIndicatorRotation = 'rotate(' + rotationValue.toString() + 'deg)';
          });
        };

        /**
         * @param {object} sender
         * @param {number} distanceToWaypoint
         * @param {number} waypointId
         */
        scope.entered = function (sender, distanceToWaypoint, waypointId) {
          scope.$parent.fireEvent('arrived', { waypointId: waypointId });
          if (scope.data.autoAdvance) {
            next();
          }
        };

        /**
         * @param {object} sender
         * @param {number} distanceToWaypoint
         * @param {number} waypointId
         */
        scope.exited = function (sender, distanceToWaypoint, waypointId) {
          scope.$parent.fireEvent('departed', { waypointId: waypointId });
        };

        /**
         * @param {object} sender
         * @param {number} distanceToWaypoint
         * @param {number} waypointId
         */
        scope.wayfinderDisplayBoundaryEntered = function (sender, distanceToWaypoint, waypointId) {
          $timeout(function () {
            scope.$root.wayfinderDisplayBoundaryReached = true;
            updateWayfinderVisibilities(true);
            draw();
          }, 1);
        };

        /**
         * @param {object} sender
         * @param {number} distanceToWaypoint
         * @param {number} waypointId
         */
        scope.wayfinderDisplayBoundaryExited = function (sender, distanceToWaypoint, waypointId) {
          $timeout(function () {
            scope.$root.wayfinderDisplayBoundaryReached = false;
            updateWayfinderVisibilities(true);
            draw();
          }, 1);
        };

        function toBool(v) {
          return v !== undefined ? v === 'true' || v === true : false;
        }

        // not updated too often, so handle as a group
        scope.$watchGroup(
          ['idField', 'ribboncolorField', 'stepModelSrcField', 'isholoField', 'autoadvanceField', 'showlabelsField'],
          function () {
            scope.data.id = scope.idField !== undefined ? scope.idField : undefined;
            let ribbonColor =
              scope.ribboncolorField !== undefined ? widget3dUtils.hex2rgbNormalized(scope.ribboncolorField) : null;
            scope.data.ribbonColor = ribbonColor ? ribbonColor : [1, 1, 0];

            if (scope.data.wayfinder !== undefined) {
              scope.data.wayfinder.setColor(scope.data.ribbonColor);
            }

            scope.data.stepModelSrc =
              scope.stepmodelsrcField !== undefined && scope.stepmodelsrcField !== ''
                ? scope.stepmodelsrcField
                : 'extensions/images/navSphere92Vertices.pvz';
            scope.data.isholo = toBool(scope.isholoField);
            scope.data.autoAdvance = toBool(scope.autoadvanceField);
            scope.data.showLabels = toBool(scope.showlabelsField);

            if (scope.data.wayfinder !== undefined) {
              scope.data.wayfinder.setShowLabels(scope.data.showLabels);
            }
          }
        );

        // distance at which we trigger enter/exit crossing events
        scope.$watchGroup(['eventradiusField', 'wayfinderdisplayboundaryField'], function () {
          // if a waypoint in poidata does not include eventRadius or wayfinderDisplayBoundary the values from eventradiusField and wayfinderdisplayboundaryField are used
          scope.data.eventRadius = scope.eventradiusField !== undefined ? parseFloat(scope.eventradiusField) : 0.5;

          scope.data.wayfinderDisplayBoundary =
            scope.wayfinderdisplayboundaryField !== undefined
              ? parseFloat(scope.wayfinderdisplayboundaryField)
              : scope.data.eventRadius * 4;

          if (scope.data.wayfinder !== undefined) {
            scope.data.wayfinder.setEventRadiusAndDisplayBoundary(
              scope.data.eventRadius,
              scope.data.wayfinderDisplayBoundary
            );
          }
        });

        // let's emit an info table - this makes the data easily consumable by Thingworx
        // not sure if there's a twx function to do this already?
        function buildInfoTable(rows) {
          let iTable = {
            rows: rows,
            dataShape: {
              fieldDefinitions: {
                gaze: { aspects: {}, baseType: 'STRING', name: 'gaze' },
                position: { aspects: {}, baseType: 'STRING', name: 'position' },
                up: { aspects: {}, baseType: 'STRING', name: 'up' },
                metadata: { aspects: {}, baseType: 'STRING', name: 'metadata' },
                label: { aspects: {}, baseType: 'STRING', name: 'label' },
              },
            },
          };
          return iTable;
        }

        // move locator to specified location (index)
        scope.setSelected = function () {
          if (
            scope.data.ready &&
            scope.data.wayfinder !== undefined &&
            scope.data.poiData !== undefined &&
            scope.data.selectedPoiId >= 0 &&
            scope.data.selectedPoiId < scope.data.poiData.length
          ) {
            $timeout(function () {
              //build the locator
              if (typeof scope.data.poiData === 'string') {
                scope.data.poiData = JSON.parse(scope.data.poiData);
              }

              let rp = scope.data.poiData[scope.data.selectedPoiId];
              let selrow = {
                position: rp.position,
                gaze: rp.gaze,
                up: rp.up,
                eventRadius: rp.eventRadius,
                wayfinderDisplayBoundary: rp.wayfinderDisplayBoundary,
                color: rp.color,
                metadata: rp.metadata,
                label: rp.label,
              }; // we only want these fields

              let vector3FromString = function (obj) {
                if (typeof obj === 'string') {
                  let pcs = obj.trim().split(','); // split by comma
                  if (pcs.length < 3) {
                    pcs = obj.trim().split(' ');
                  } // try spaces
                  return new THREE.Vector3(parseFloat(pcs[0]), parseFloat(pcs[1]), parseFloat(pcs[2]));
                } else {
                  return new THREE.Vector3(obj.x, obj.y, obj.z);
                }
              };

              /**
               * @type Locator
               */
              let locator = {
                position: vector3FromString(selrow.position),
                gaze: vector3FromString(selrow.gaze),
                up: vector3FromString(selrow.up),
                color: selrow.color,
                label: selrow.label,
              };

              scope.data.wayfinder.setTargetLocation(locator);
              scope.data.wayfinder.setSelectedPoiId(scope.data.selectedPoiId);

              // if the poi is actually a zoi (zone) then let's use the radius
              scope.data.wayfinder.setEventRadiusAndDisplayBoundary(rp.eventRadius, rp.wayfinderDisplayBoundary);

              // and set the shared output - note : this needs to be an infotable
              scope.selectedwaypointvalueField = buildInfoTable([selrow]);

              if (scope.trackingacquired === true) {
                scope.data.enabled = true;
                executeNavigation();
              }

              scope.$parent.fireEvent('activated');
            }, 1);
          }
        };

        // look for changes in input data
        scope.$watch(
          function () {
            return JSON.stringify(scope.poidataField);
          },
          function (value) {
            scope.data.poiData = scope.poidataField;

            //reset the selected index if it is out of range
            //question : should we do this always i.e. always reset to zero
            if (
              scope.data.poiData !== undefined &&
              scope.data.poiData instanceof Array &&
              scope.data.selectedPoiId >= scope.data.poiData.length
            ) {
              scope.data.selectedPoiId = 0;
            }

            scope.setSelected();
          }
        );

        scope.$watch('poiField', function () {
          scope.data.selectedPoiId = scope.poiField !== undefined ? parseInt(scope.poiField) : -1;
          scope.data.poiData = scope.poidataField;
          scope.setSelected();
        });

        scope.$watch('enabledField', function () {
          scope.data.enabled = toBool(scope.enabledField);

          updateWayfinderVisibilities(false);
          draw();
        });

        scope.$watch('reticlevisibleField', function () {
          scope.data.reticleVisible = !(
            scope.reticlevisibleField === undefined || scope.reticlevisibleField === 'false'
          );
          updateWayfinderVisibilities(false);
          draw();
        });

        function arrivedAtLastWaypoint() {
          scope.$parent.fireEvent('lastWaypointReached');
          scope.enabledField = false;
          updateWayfinderVisibilities(true);
          draw();
        }

        let next = function () {
          if (scope.data.wayfinder !== undefined) {
            $timeout(function () {
              if (scope.poiField < scope.data.poiData.length - 1) {
                scope.poiField++;
              } else {
                arrivedAtLastWaypoint();
              }
            }, 1);
          }
        };

        let previous = function () {
          if (scope.data.wayfinder !== undefined) {
            $timeout(function () {
              if (scope.poiField > 0) {
                scope.poiField--;
              }
            }, 1);
          }
        };

        scope.$watch('delegateField', function (delegate) {
          if (delegate) {
            delegate.next = function () {
              next();
            };
            delegate.previous = function () {
              previous();
            };
          }
        });

        // make sure we are triggered when the page is ready
        scope.$root.$on('$ionicView.afterEnter', function (event) {
          // check that I (as named widget) am referenced in this view
          if (event.targetScope.view.wdg[scope.data.id] !== undefined) {
            scope.data.ready = true;
            init();
          }
        });

        // ugly timing hack ; re-trigger initial placement when model(s) are loaded
        // ideally this would be when MY models are loaded (not any others) but there's an even
        // uglier timing problem going on underneath this
        scope.$root.$on('modelLoaded', function (evt, arg) {
          if (!scope.data.ready) {
            scope.data.ready = true;
            $timeout(scope.setSelected, 2000);
          }
        });
      },
    };
  }
})();

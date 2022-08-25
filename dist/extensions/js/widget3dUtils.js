/* eslint-disable-next-line no-unused-vars */
var widget3dUtils = (function () {
  'use strict';

  const widget3dUtils = {
    /**
     * Converts css rgb color strings to hex color strings
     *
     * @param {string} rgb string such as rgb(255, 255, 255, 0)
     */
    rgb2hex: (rgb) => {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return rgb && rgb.length === 4
        ? '#' +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : '';
    },

    /**
     * Converts a hex value to a normalized RGB array.
     * @param hex
     * @returns {null|number[]}
     */
    hex2rgbNormalized: (hex) => {
      let validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!validHex) {
        return null;
      }

      let rgb = [parseInt(validHex[1], 16) / 255, parseInt(validHex[2], 16) / 255, parseInt(validHex[3], 16) / 255];
      return rgb;
    },

    /**
     * @param {String} text
     * @param {Number} tx
     * @param {Number} ty
     * @param {Number} maxWidth
     * @param {Number} lineHeight
     * @param {CanvasRenderingContext2D} context
     * @param {Number} isMultilineText
     * @param {Number} maxLines
     */
    fillText: (text, tx, ty, maxWidth, lineHeight, context, isMultilineText, maxLines) => {
      const wordsInLines = text.split('\n').map((line) => line.split(' '));
      const dotsWidth = context.measureText('...').width;
      const lines = [];
      for (const words of wordsInLines) {
        let line = '';
        let isFirstWord = true;
        for (const word of words) {
          const space = isFirstWord ? '' : ' ';
          let testLine = line + space + word;
          let metrics = context.measureText(testLine);
          let testWidth = metrics.width;
          if (testWidth > maxWidth && !isFirstWord) {
            if (!isMultilineText || lines.length === maxLines - 1) {
              if (testWidth + dotsWidth > maxWidth) {
                const lastSpaceIndex = line.lastIndexOf(' ');
                if (lastSpaceIndex > 0) {
                  line = line.substring(0, lastSpaceIndex);
                }
              }
              line = line + '...';
              break;
            }
            lines.push(line);
            line = word;
          } else {
            line = testLine;
          }
          isFirstWord = false;
        }
        lines.push(line);
      }

      const lc = lines.length;
      let sy = ty - (lc * lineHeight) / 2;
      lines.forEach((line) => {
        context.fillText(line, tx, sy);
        sy += lineHeight;
      });
    },

    /**
     * Draws a small Image and a label and returns that as a data url encoded image
     * @param {Object} icon
     * @param {Object} props An object with the following nodes: height {Number}, width {Number},
     * fontColor {RGBA}, fontSize {Number} (optional, defaults to 70px).
     * @param {String} itext
     * @param {boolean} smallIcon
     * @returns {String} Returns a PNG image buffer as a base64 string.
     */
    generateLabelAndIconTexture: (icon, props, itext, smallIcon) => {
      const hasIcon = icon !== undefined;
      const canvas = document.createElement('canvas');
      const hproportion = props.height / widget3dUtils.ButtonMinSize;
      const aspectLimit = 1.5;
      const canvasHeight = 512 * hproportion;
      const wideHorizontalMargin = hasIcon ? 96 * hproportion : 0;
      const textMargin = 48 * hproportion;
      const textVerticalPosition = 75;
      const defaultFontSize = 70;
      const edgeMargin = smallIcon ? 170 : 48;

      const canvasAspect = props.width / props.height;
      const canvasWidth = canvasHeight * canvasAspect;
      const iconSize = hasIcon ? Math.min(canvasHeight, canvasWidth) - 2 * edgeMargin : 0;
      const iconAspect = hasIcon ? icon.width / icon.height : 0;
      const isWide = canvasAspect > aspectLimit && smallIcon;

      const wideIcon = iconAspect > (smallIcon ? 1 : canvasAspect);
      let iconWidth = 0,
        iconHeight = 0;
      if (smallIcon) {
        iconWidth = wideIcon ? iconSize : iconSize * iconAspect;
        iconHeight = wideIcon ? iconSize / iconAspect : iconSize;
      } else {
        if (wideIcon) {
          iconWidth = canvasWidth - 2 * edgeMargin;
          iconHeight = iconWidth / iconAspect;
        } else {
          iconHeight = canvasHeight - 2 * edgeMargin;
          iconWidth = iconHeight * iconAspect;
        }
      }
      const dx = iconWidth / 2;

      const horizontalMargin = isWide ? wideHorizontalMargin - dx + iconSize / 2 : canvasWidth / 2 - dx;
      const verticalMargin = canvasHeight / 2 - iconHeight / 2;

      const ctx = canvas.getContext('2d');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      if (hasIcon) {
        ctx.drawImage(icon, horizontalMargin, verticalMargin, iconWidth, iconHeight);
      }

      ctx.textAlign = isWide ? 'left' : 'center';
      // Preview can only use HEX in cavas so we convert here to get same results
      ctx.fillStyle = widget3dUtils.rgb2hex(props.fontColor); //pass in font color prop
      let fontSize = props.fontsize || defaultFontSize;
      ctx.font = 'bold ' + fontSize.toString() + 'px Arial'; // Segoe only works with some tricky stuff see Styles for more information

      const tx = isWide ? wideHorizontalMargin + iconSize + textMargin : canvasWidth / 2; // if the button is square, center the text, otherwise draw to the right of the image
      const ty =
        isWide || !hasIcon ? canvasHeight / 2 + fontSize * 0.85 : canvasHeight - textVerticalPosition + fontSize * 0.85; // if centered, draw below the image
      const maxWidth =
        isWide && hasIcon
          ? canvasWidth - (wideHorizontalMargin * 2 + iconSize + textMargin)
          : canvasWidth - 2 * textMargin;
      const maxLines = isWide ? Math.floor((canvasHeight - 2 * textMargin) / fontSize) : 1;

      // we may need to adjust y to take multi-line into account e..g if there are 2 lines, we need to move y(start) up
      widget3dUtils.fillText(itext, tx, ty, maxWidth, fontSize, ctx, isWide, maxLines);

      const imageData = canvas.toDataURL() + '#edge=clamp';
      return imageData;
    },

    /**
     * Draws an Image and a label and returns that as a data url encoded image
     * @param {Object} widget
     * @param {String} isrc
     * @param {String} itext
     * @param {Object} params
     * @param {Boolean} smallIcon
     * @returns {Promise}
     */
    generateLabelAndIconImage: (widget, element, isrc, itext, smallIcon = true) => {
      return new Promise((resolve) => {
        if (isrc === undefined || isrc === null || isrc === '') {
          // Render text only
          const imageData = widget3dUtils.generateLabelAndIconTexture(undefined, widget, itext, smallIcon);
          resolve(imageData);
          return;
        }
        // Render text and image combine
        const background = new Image();
        background.src = isrc;
        background.onload = () => {
          const imageData = widget3dUtils.generateLabelAndIconTexture(background, widget, itext, smallIcon);
          resolve(imageData);
        };
      });
    },

    transformFromPose: function (pose) {
      let translation = pose.translation || pose.position || { x: 0, y: 0, z: 0 };
      translation.x = translation.x || 0;
      translation.y = translation.y || 0;
      translation.z = translation.z || 0;

      let rotation = pose.rotation || pose.orientation || { x: 0, y: 0, z: 0 };
      rotation.x = rotation.x || 0;
      rotation.y = rotation.y || 0;
      rotation.z = rotation.z || 0;

      let scale = pose.scale || { x: 1, y: 1, z: 1 };
      scale.x = scale.x || 1;
      scale.y = scale.y || 1;
      scale.z = scale.z || 1;

      let scaleMat = new THREE.Matrix4().makeScale(scale.x, scale.y, scale.z);
      let rotMat = new THREE.Matrix4().makeRotationFromEuler(
        new THREE.Euler(
          THREE.Math.degToRad(rotation.x),
          THREE.Math.degToRad(rotation.y),
          THREE.Math.degToRad(rotation.z),
          'ZYX'
        )
      );
      let posMat = new THREE.Matrix4().makeTranslation(translation.x, translation.y, translation.z);

      return posMat.multiply(rotMat.multiply(scaleMat));
    },

    /**
     * Draws a guide Image and a guide hint and returns that as a data url encoded image
     * @param {String} hintText
     * @returns {Object}
     */
    generateAreaTargetGuideImage: (hintText) => {
      return new Promise((resolve) => {
        // Render text and image combine
        const background = new Image();
        background.src = 'extensions/images/area-target-guide.png';
        background.onload = () => {
          const canvas = document.createElement('canvas');

          // work out size/dims of the canvas
          canvas.width = 512;
          canvas.height = 602;
          const imageWidth = canvas.width - 128;
          const imageHeight = canvas.height - 128;
          const yTextOffset = 30; // scaled y offset for text

          const ctx = canvas.getContext('2d');

          // we need to center this image, so lets see what shape it is
          const iBase = imageWidth / imageHeight;
          const bBase = background.width / background.height;

          // if the image aspect is wider than the button, need to adjust by width; otherwise fit by height
          const iAspect = iBase > 1 && bBase < iBase ? imageHeight / background.height : imageWidth / background.width;

          const scaled = { width: background.width * iAspect, height: background.height * iAspect }; // use largest dim to work out actual scale

          // adjust and center image
          const ix = canvas.width / 2 - scaled.width / 2;
          const iy = 90;
          ctx.drawImage(background, ix, iy, scaled.width, scaled.height);

          if (hintText) {
            ctx.textAlign = 'center';
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.font = 'bold 30px Arial';
            const tx = canvas.width / 2; // if the button is square, center the text, otherwise draw to the right of the image
            const ty = canvas.height - yTextOffset; // if centered, draw below the image
            widget3dUtils.fillText(hintText, tx, ty, canvas.width - 50, 30, ctx, true);
          }
          const imageData = canvas.toDataURL();
          resolve(imageData);
        };
      });
    },

    /**
     * Decompose transformation matrix into translation, rotation and scale
     * @param {object} transform - transformation matrix
     */
    poseFromTransform: function (transform) {
      var translation = new THREE.Vector3(),
        quaternion = new THREE.Quaternion(),
        rotation = new THREE.Euler(),
        scale = new THREE.Vector3();
      transform.decompose(translation, quaternion, scale);
      rotation.setFromQuaternion(quaternion, 'ZYX');
      return {
        translation: translation,
        rotation: {
          x: THREE.Math.radToDeg(rotation._x),
          y: THREE.Math.radToDeg(rotation._y),
          z: THREE.Math.radToDeg(rotation._z),
        },
        scale: scale,
      };
    },

    /**
     * Calculates widget part location after rotating the panel it is placed over.
     * Used for widgets containing objects placed over a panel model.
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} rx
     * @param {Number} ry
     * @param {Number} rz
     * @param {Number} xOffset
     * @param {Number} yOffset
     * @param {Number} zOffset
     * @returns updated position of object after container rotation
     */
    updatePositionAccordingToRotation: function (x, y, z, rx, ry, rz, xOffset, yOffset, zOffset) {
      let panelGlobal = widget3dUtils.transformFromPose({
        translation: { x: x, y: y, z: z },
        rotation: { x: rx, y: ry, z: rz },
      });
      let buttonLocal = widget3dUtils.transformFromPose({
        translation: { x: xOffset, y: yOffset, z: zOffset },
      });

      let buttonGlobal = panelGlobal.multiply(buttonLocal);
      let pose = widget3dUtils.poseFromTransform(buttonGlobal);

      return pose.translation;
    },

    //panel design constants
    PanelChildWidgetsMinMargin: 0.008,
    PanelEdgeMinMargin: 0.015,
    PanelDefaultSize: 0.3,
    ButtonDisabledColor: 'rgba(40,40,40,1);',
    ButtonMinSize: 0.04,

    getPanelPinButtonSize: function (panelWidth) {
      return panelWidth / 6.5 > widget3dUtils.ButtonMinSize ? panelWidth / 6.5 : widget3dUtils.ButtonMinSize; // (panelWidth / 6.5) is visually appealing
    },

    getDocImageHeight: function (widgetHeight) {
      return widgetHeight - 2 * widget3dUtils.PanelEdgeMinMargin;
    },

    getDocImageWidth: function (widgetWidth, hideControls, btnSize) {
      let docFrameWidth = widgetWidth - 2 * widget3dUtils.PanelEdgeMinMargin;
      if (!hideControls) {
        docFrameWidth -= widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }
      return docFrameWidth;
    },

    getPanelPinButtonRelativePositionAndSize: function (panelWidth, panelHeight) {
      const size = widget3dUtils.getPanelPinButtonSize(panelWidth);
      return {
        size: size,
        x: panelWidth / 2 - size / 2,
        y: panelHeight / 2 + widget3dUtils.PanelEdgeMinMargin + size / 2,
        z: -0.008,
      };
    },

    getPanelPinButtonAbsolutePositionAndSize: function (x, y, z, rx, ry, rz, panelWidth, panelHeight) {
      const sizeAndPosition = widget3dUtils.getPanelPinButtonRelativePositionAndSize(panelWidth, panelHeight);
      let position = widget3dUtils.updatePositionAccordingToRotation(
        x,
        y,
        z,
        rx,
        ry,
        rz,
        sizeAndPosition.x,
        sizeAndPosition.y,
        sizeAndPosition.z
      );
      position.size = sizeAndPosition.size;
      return position;
    },

    getPanelMediaControlButtonsSize: function (panelWidth) {
      const totalXGaps = widget3dUtils.PanelEdgeMinMargin * 2 + widget3dUtils.PanelChildWidgetsMinMargin * 3;
      return (panelWidth - totalXGaps) / 4;
    },

    getPanelMediaControlButtonsRelativePositionsAndSize: function (panelWidth, panelHeight) {
      const size = widget3dUtils.getPanelMediaControlButtonsSize(panelWidth);
      const xLocSkipBack = -(panelWidth / 2 - widget3dUtils.PanelEdgeMinMargin - size / 2);
      return {
        size: size,
        y: -(panelHeight / 2 - widget3dUtils.PanelEdgeMinMargin - size / 2),
        z: 0,
        xSkipB: xLocSkipBack,
        xPlay: xLocSkipBack + size + widget3dUtils.PanelChildWidgetsMinMargin,
        xStop: xLocSkipBack + 2 * size + 2 * widget3dUtils.PanelChildWidgetsMinMargin,
        xSkipA: xLocSkipBack + 3 * size + 3 * widget3dUtils.PanelChildWidgetsMinMargin,
      };
    },

    adjustVideoWidgetWidth: function (heightIn, ratio, hideControls, totalXGaps) {
      /*
      cm - child margin, em - edge margin

      height = btnSize + vidHeight + 2 * em + cm 
      width = 4 * btnSize + 3 * cm + 2 * em
      width = vidWidth + 2 * em

      ratio = vidHeight / vidWidth
      vidHeight = ratio * vidWidth


      height = btnSize + ratio * vidWidth + 2 * em + cm
      width = vidWidth + 2 * em

      vidWidth = 4 * btnSize + 3 * cm

      height = btnSize + ratio * (4 * btnSize + 3 * cm) + 2 * em + cm
      height = btnSize + 4 * ratio * btnSize + 3 * ratio * cm + 2 * em + cm
      (1 + 4 * ratio) * btnSize = height - 3 * ratio * cm - 2 * em - cm
      */
      let height = Number.parseFloat(heightIn);
      const em = widget3dUtils.PanelEdgeMinMargin;

      if (!hideControls) {
        const cm = widget3dUtils.PanelChildWidgetsMinMargin;
        const btnSize = (height - 3 * ratio * cm - 2 * em - cm) / (1 + 4 * ratio);

        return 4 * btnSize + 3 * cm + 2 * em;
      } else {
        const adjustedVideoHeight = height - 2 * em;
        const adjustedVideoWidth = adjustedVideoHeight / ratio;

        return adjustedVideoWidth + 2 * em;
      }
    },

    adjustVideoWidgetHeight: function (widthIn, ratio, hideControls, totalXGaps) {
      let width = Number.parseFloat(widthIn);
      const adjustedVideoWidth = width - widget3dUtils.PanelEdgeMinMargin * 2;
      const adjustedVideoHeight = adjustedVideoWidth * ratio;
      const btnSize = (width - totalXGaps) / 4;
      let height = adjustedVideoHeight + widget3dUtils.PanelEdgeMinMargin * 2;
      if (!hideControls) {
        height += widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }

      return height;
    },

    // Page size definitions of the 3D Document widget
    documentPageSizes: [
      { width: 0.42, height: 0.297 }, // A3 Landscape
      { width: 0.297, height: 0.42 }, // A3 Portrait
      { width: 0.297, height: 0.21 }, // A4 Landscape
      { width: 0.21, height: 0.297 }, // A4 Portrait
      { width: 0.21, height: 0.1485 }, // A5 Landscape
      { width: 0.1485, height: 0.21 }, // A5 Portrait
      { width: 0.2794, height: 0.2159 }, // US Letter Landscape
      { width: 0.2159, height: 0.2794 }, // US Letter Portrait
    ],

    defaultDocumentPageSizeIndex: 3, //A4 Portrait

    /**
     * gets the document widget height calculated according to the given page height.
     * @param pageHeight - original page height
     * @returns {number} height of the document widget
     */
    getDocumentWidgetHeight: function (pageHeight) {
      let widgetHeight = pageHeight + widget3dUtils.PanelEdgeMinMargin * 2;
      return widgetHeight.toFixed(3);
    },

    /**
     * gets the document widget height calculated according to the given page width.
     * @param pageWidth - original page width
     * @param hideControls - whether the controls are hidden or not
     * @param btnSize - size of the button
     * @returns {number} height of the document widget
     */
    getDocumentWidgetWidth(pageWidth, hideControls, btnSize) {
      let widgetWidth = pageWidth + widget3dUtils.PanelEdgeMinMargin * 2;
      if (!hideControls) {
        widgetWidth += widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }
      return widgetWidth.toFixed(3);
    },

    adjustDocumentWidgetWidth: function (heightIn, ratio, hideControls, btnSize) {
      let height = Number.parseFloat(heightIn);
      const adjustedDocumentHeight = height - widget3dUtils.PanelEdgeMinMargin * 2;
      const adjustedDocumentWidth = adjustedDocumentHeight / ratio;

      let width = adjustedDocumentWidth + widget3dUtils.PanelEdgeMinMargin * 2;
      if (!hideControls) {
        width += widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }

      return width;
    },

    adjustDocumentWidgetHeight: function (widthIn, ratio, hideControls, btnSize) {
      let width = Number.parseFloat(widthIn);
      let adjustedDocumentWidth = width - widget3dUtils.PanelEdgeMinMargin * 2;
      if (!hideControls) {
        adjustedDocumentWidth -= widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }
      const adjustedDocumentHeight = adjustedDocumentWidth * ratio;
      let height = adjustedDocumentHeight + widget3dUtils.PanelEdgeMinMargin * 2;

      return height;
    },

    /**
     * stretches the image of the currently displayed PDF page according to the
     * document frame dimensions as much as possible
     * @param pageWidth - original page width
     * @param pageHeight - original page height
     * @param docWidth - document frame width
     * @param docHeight - document frame height
     * @returns {{width: number, height: number}} adjusted width and height of the page
     */
    calculatePageImageDimensions(pageWidth, pageHeight, docWidth, docHeight) {
      // Adjust the height under the assumption that when the page's width is the frame's width the
      // adjusted height does not exceed the frame's height.
      // With the calculation below, the new image for the first page is such that its width
      // is the frame's width.
      let adjustedHeight = (pageHeight * docWidth) / pageWidth;

      let newPicHeight, newPicWidth;

      // Check whether the assumption is wrong.
      if (adjustedHeight > docHeight) {
        // If the adjusted height is bigger, the adjusted height should be capped at the frame's height.
        newPicHeight = docHeight;
        // The new width is calculated accordingly.
        newPicWidth = (newPicHeight * pageWidth) / pageHeight;
      } else {
        // If the assumption is correct keep the height, and set the width to the frame's width.
        newPicWidth = docWidth;
        newPicHeight = adjustedHeight;
      }

      newPicWidth = Number(newPicWidth.toFixed(3));
      newPicHeight = Number(newPicHeight.toFixed(3));

      return { width: newPicWidth, height: newPicHeight };
    },

    getPanelDocumentControlButtonsImagesRelativePositionsAndSize: function (
      panelWidth,
      panelHeight,
      btnSize,
      hideControls
    ) {
      // Each button is of constant size, but will always be located in the same relative position of the panel
      // at its center.
      const yChildToChildSpace = widget3dUtils.PanelChildWidgetsMinMargin;
      const yEdgeSpace = (panelHeight - 3.5 * btnSize - 3 * yChildToChildSpace) / 2;
      const yLocSkipBack = 0.5 * panelHeight - yEdgeSpace - 0.5 * btnSize;

      let docWidth = panelWidth - widget3dUtils.PanelEdgeMinMargin * 2;
      if (!(hideControls === 'true' || hideControls === true)) {
        docWidth -= widget3dUtils.PanelChildWidgetsMinMargin + btnSize;
      }

      let docHeight = panelHeight - widget3dUtils.PanelEdgeMinMargin * 2;

      return {
        physicalDocWidth: docWidth,
        physicalDocHeight: docHeight,
        x: panelWidth / 2 - widget3dUtils.PanelEdgeMinMargin - btnSize / 2,
        xPageImage: -0.5 * panelWidth + widget3dUtils.PanelEdgeMinMargin + 0.5 * docWidth,
        z: 0,
        yScrollToTop: yLocSkipBack,
        yPageUp: yLocSkipBack - yChildToChildSpace - btnSize,
        yPageNumber: yLocSkipBack - 2 * yChildToChildSpace - 1.75 * btnSize,
        yPageDown: yLocSkipBack - 3 * yChildToChildSpace - 2.5 * btnSize,
      };
    },

    getPanelMediaControlButtonsAbsolutePositionsAndSize: function (x, y, z, rx, ry, rz, panelWidth, panelHeight) {
      const buttonsRelativePosAndSize = widget3dUtils.getPanelMediaControlButtonsRelativePositionsAndSize(
        panelWidth,
        panelHeight
      );
      return {
        size: buttonsRelativePosAndSize.size,
        skipB: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.xSkipB,
          buttonsRelativePosAndSize.y,
          buttonsRelativePosAndSize.z
        ),
        skipA: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.xSkipA,
          buttonsRelativePosAndSize.y,
          buttonsRelativePosAndSize.z
        ),
        stop: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.xStop,
          buttonsRelativePosAndSize.y,
          buttonsRelativePosAndSize.z
        ),
        play: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.xPlay,
          buttonsRelativePosAndSize.y,
          buttonsRelativePosAndSize.z
        ),
      };
    },

    getPanelDocumentControlButtonsImagesAbsolutePositionsAndSize: function (
      x,
      y,
      z,
      rx,
      ry,
      rz,
      panelWidth,
      panelHeight,
      btnSize,
      hideControls
    ) {
      const buttonsRelativePosAndSize = widget3dUtils.getPanelDocumentControlButtonsImagesRelativePositionsAndSize(
        panelWidth,
        panelHeight,
        btnSize,
        hideControls
      );
      return {
        scrollToTop: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.x,
          buttonsRelativePosAndSize.yScrollToTop,
          buttonsRelativePosAndSize.z
        ),
        pageUp: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.x,
          buttonsRelativePosAndSize.yPageUp,
          buttonsRelativePosAndSize.z
        ),
        pageNumber: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.x,
          buttonsRelativePosAndSize.yPageNumber,
          buttonsRelativePosAndSize.z
        ),
        pageDown: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.x,
          buttonsRelativePosAndSize.yPageDown,
          buttonsRelativePosAndSize.z
        ),
        pageImage: widget3dUtils.updatePositionAccordingToRotation(
          x,
          y,
          z,
          rx,
          ry,
          rz,
          buttonsRelativePosAndSize.xPageImage,
          0,
          buttonsRelativePosAndSize.z
        ),
      };
    },

    /**
     * used when the button's dimension changing to adjust the offset from the back panel
     * @param newWidth - new width value
     * @param newHeight - new height value
     * @param oldWidth - old width value
     * @param oldHeight - old height value
     * @returns {number} desired offset from the back panel
     */
    getButtonOffsetFromBackPanel: function (newWidth, newHeight, oldWidth, oldHeight) {
      // automatically adjuts the Z distance of the button from the backplate
      if (newHeight) {
        let newScale = newHeight;
        let oldScale = oldWidth ? oldWidth.value : widget3dUtils.ButtonMinSize;
        let shortest = newScale < oldScale ? newScale : oldScale;
        return (shortest - widget3dUtils.ButtonMinSize) * 0.1;
      }
      if (newWidth) {
        let newScale = newWidth;
        let oldScale = oldHeight ? oldHeight.value : widget3dUtils.ButtonMinSize;
        let shortest = newScale < oldScale ? newScale : oldScale;
        return (shortest - widget3dUtils.ButtonMinSize) * 0.1;
      }
    },

    /**
     * calculating the new button pose with consideration of the offset from the back panel
     * @param newZ - new offset from the back panel
     * @param oldZ - old offset from the back panel
     * @param buttonProps - the button's properties, used for getting the current button pose
     * @returns {{rotation: {x: *, y: *, z: *}, translation: Vector3, scale: Vector3}} - the new button pose with the offset
     */
    getButtonNewTranslationFromBackPanelOffset: function (newZ, oldZ, buttonProps) {
      const zOffsetTransform = widget3dUtils.transformFromPose({ translation: { z: newZ - oldZ } });
      const buttonLocalTransform = widget3dUtils.transformFromPose({
        translation: { x: Number(buttonProps.x.value), y: Number(buttonProps.y.value), z: Number(buttonProps.z.value) },
        rotation: { x: Number(buttonProps.rx.value), y: Number(buttonProps.ry.value), z: Number(buttonProps.rz.value) },
      });
      return widget3dUtils.poseFromTransform(buttonLocalTransform.multiply(zOffsetTransform));
    },

    /**
     * Runs a for loop over the assetObj nodes and sets the xyz coordinates of a positionObj node
     * with the same key.
     * The orientation is then also added.
     * @param {Object} assetObj
     * @param {Object} positionObj
     * @param {Object} orientation
     */
    setPositionsToAssets: function (assetObj, positionObj, orientation) {
      for (const assetKey in assetObj) {
        if (positionObj[assetKey]) {
          assetObj[assetKey].SetPosition(positionObj[assetKey].x, positionObj[assetKey].y, positionObj[assetKey].z);
          assetObj[assetKey].SetOrientation(orientation.x, orientation.y, orientation.z);
        }
      }
    },

    getDesignTagalongIcon: function (tagalong) {
      return tagalong ? 'extensions/images/3D_Panel_Pin.png' : 'extensions/images/3D_Panel_Unpin.png';
    },

    getRuntimeTagalongIcon: function (tagalong) {
      return tagalong ? 'app/resources/Default/3D_Panel_Pin.png' : 'app/resources/Default/3D_Panel_Unpin.png';
    },

    BoxPrimitiveTemplate: JSON.stringify({ type: 'box', height: 1, width: 1, depth: 0.01 }),

    isSameOriginUrl: (url) => {
      const anchor = document.createElement('a');
      anchor.href = url;
      return anchor.host === window.location.host;
    },

    /**
     * Externalizes the url through local studio server proxy, so that same origin policy can be
     * bypassed.
     * @param {String} url
     */
    externalizeUrl: (url) => {
      return widget3dUtils.isSameOriginUrl(url) ? url : '/api/external?url=' + encodeURIComponent(url);
    },

    isSupportedVideo: function (src) {
      if (src.endsWith('.mp4') || src.endsWith('.webm')) {
        return true;
      }
      return false;
    },

    isSupportedDocument: function (src) {
      let srcIsUndefined = !src;
      let srcIsEmpty = src === '';
      let srcEndsCorrectly = false;
      if (typeof src === 'string') {
        srcEndsCorrectly = src.endsWith('.pdf');
      }
      return !srcIsUndefined && !srcIsEmpty && srcEndsCorrectly;
    },

    isSupportedAudio: function (src) {
      if (src.endsWith('.mp3') || src.endsWith('.wav') || src.endsWith('.mp4')) {
        return true;
      }
      return false;
    },
  };

  if (typeof angular !== 'undefined') {
    angular.module('ngWidget3dUtils', []).service('widget3dUtils', [
      function () {
        return widget3dUtils;
      },
    ]);
  }

  return widget3dUtils;
})();

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'video3D-ng';
}

(function () {
  'use strict';
  const minWidth = 0.22;
  const minHeight = 0.186;

  function ngVideo3D($timeout, $http, $window, $injector, $sce, widget3dUtils) {
    return {
      restrict: 'EA',
      scope: {
        isholoField: '@',
        srcField: '@',
        widthField: '@',
        heightField: '@',
        showcontrolsField: '@',
        idField: '@',
        playingField: '=',
        tagalongField: '=',
        buttonsSizeField: '@',
        delegateField: '=',
      },

      link: function (scope, element, attr) {
        scope.data = {
          width: undefined,
          height: undefined,
          showControls: true,
          src: '',
          videoWidth: 1,
          videoHeight: 1,
          videoPhysicalWidth: 1,
          videoPhysicalHeight: 1,
          loadedVideo: undefined,
        };

        scope.renderer = $window.cordova ? vuforia : $injector.get('threeJsTmlRenderer');

        function prevBtnId() {
          return scope.idField + '-prev';
        }
        function nextBtnId() {
          return scope.idField + '-next';
        }
        function stopBtnId() {
          return scope.idField + '-stop';
        }
        function playBtnId() {
          return scope.idField + '-play';
        }
        function videoId() {
          return scope.idField + '-video';
        }
        function pinBtnId() {
          return scope.idField + '-pin';
        }
        function panelId() {
          return scope.idField + '-panel';
        }
        scope.groupWidget = element[0].children.namedItem(scope.idField);
        scope.panelWidget = scope.groupWidget.children.namedItem(panelId());
        scope.videoWidget = scope.groupWidget.children.namedItem(videoId());
        scope.prevBtnWidget = scope.groupWidget.children.namedItem(prevBtnId()).children.namedItem(prevBtnId());
        scope.nextBtnWidget = scope.groupWidget.children.namedItem(nextBtnId()).children.namedItem(nextBtnId());
        scope.stopBtnWidget = scope.groupWidget.children.namedItem(stopBtnId()).children.namedItem(stopBtnId());
        scope.playBtnWidget = scope.groupWidget.children.namedItem(playBtnId()).children.namedItem(playBtnId());
        scope.pinBtnWidget = scope.groupWidget.children.namedItem(pinBtnId()).children.namedItem(pinBtnId());

        // Draws an Image and a label on a 3D Press Button
        const relocateWidgetElements = function (width, height, showControlsFlag) {
          console.log('[' + scope.idField + '] is updating sizes and locations of its elements');
          // Calculate new position for buttons:
          const pinBtnPosSize = widget3dUtils.getPanelPinButtonRelativePositionAndSize(width, height);
          const mediaBtnsPosSize = widget3dUtils.getPanelMediaControlButtonsRelativePositionsAndSize(width, height);

          // Calculate new position for image:
          const imageWidth = width - widget3dUtils.PanelEdgeMinMargin * 2;
          let imageHeight = height - widget3dUtils.PanelEdgeMinMargin * 2;
          if (showControlsFlag) {
            imageHeight -= widget3dUtils.PanelChildWidgetsMinMargin + mediaBtnsPosSize.size;
          }

          const yLocImage = height / 2 - widget3dUtils.PanelEdgeMinMargin - imageHeight / 2;

          scope.panelWidget.setAttribute('sx', width);
          scope.panelWidget.setAttribute('sy', height);

          scope.videoWidget.setAttribute('width', imageWidth);
          scope.videoWidget.setAttribute('height', imageHeight);
          scope.videoWidget.setAttribute('x', 0);
          scope.videoWidget.setAttribute('y', yLocImage);
          scope.videoWidget.setAttribute('z', 0);

          if (showControlsFlag) {
            const mediaButtonWidgets = [
              scope.prevBtnWidget,
              scope.nextBtnWidget,
              scope.stopBtnWidget,
              scope.playBtnWidget,
            ];
            const xButtonValues = [
              mediaBtnsPosSize.xSkipB,
              mediaBtnsPosSize.xSkipA,
              mediaBtnsPosSize.xStop,
              mediaBtnsPosSize.xPlay,
            ];
            mediaButtonWidgets.forEach((mediaButton, index) => {
              mediaButton.setAttribute('width', mediaBtnsPosSize.size);
              mediaButton.setAttribute('height', mediaBtnsPosSize.size);
              mediaButton.setAttribute('y', mediaBtnsPosSize.y);
              mediaButton.setAttribute('z', 0);
              mediaButton.setAttribute('x', xButtonValues[index]);
            });
          }

          scope.pinBtnWidget.setAttribute('width', pinBtnPosSize.size);
          scope.pinBtnWidget.setAttribute('height', pinBtnPosSize.size);
          scope.pinBtnWidget.setAttribute('x', pinBtnPosSize.x);
          scope.pinBtnWidget.setAttribute('y', pinBtnPosSize.y);
          scope.pinBtnWidget.setAttribute('z', pinBtnPosSize.z);
        };

        const updateElements = function () {
          if (scope.data.width < minWidth) {
            scope.data.width = minWidth;
          }
          if (scope.data.height < minHeight) {
            scope.data.height = minHeight;
          }

          relocateWidgetElements(scope.data.width, scope.data.height, scope.data.showControls);
        };

        var playVideo = function () {
          $timeout(function () {
            scope.playingField = true;
            console.log('play ' + scope.idField);
            scope.$parent.fireEvent('playstarted');
            if (scope.renderer.playVideo) {
              scope.renderer.playVideo(videoId());
            }
          }, 1);
        };

        const pauseVideo = function () {
          $timeout(function () {
            scope.playingField = false;
            console.log('pause ' + scope.idField);
            scope.$parent.fireEvent('playpaused');
            if (scope.renderer.pauseVideo) {
              scope.renderer.pauseVideo(videoId());
            }
          }, 1);
        };

        const stopVideo = function () {
          $timeout(function () {
            scope.playingField = false;
            console.log('stop ' + scope.idField);
            scope.$parent.fireEvent('playended');
            if (scope.renderer.stopVideo) {
              scope.renderer.stopVideo(videoId());
            }
          }, 1);
        };

        const skipAheadVideo = function () {
          $timeout(function () {
            console.log('skip ahead ' + scope.idField);
            if (scope.renderer.skipAheadVideo) {
              scope.renderer.skipAheadVideo(videoId());
            }
          }, 1);
        };

        const skipBackVideo = function () {
          $timeout(function () {
            console.log('skip back ' + scope.idField);
            if (scope.renderer.skipBackVideo) {
              scope.renderer.skipBackVideo(videoId());
            }
          }, 1);
        };

        function isBool(v) {
          return v === 'true' || v === true;
        }

        scope.$root.$on('aligningnative', function (evt, src) {
          if (src === scope.idField) {
            scope.$parent.fireEvent('aligning');
          }
        });

        scope.$root.$on('alignednative', function (evt, src) {
          if (src === scope.idField) {
            scope.$parent.fireEvent('aligned');
          }
        });

        scope.$root.$on('pressed', function (evt, src) {
          if (nextBtnId() === src) {
            // User tapped the skip ahead button
            console.log(scope.idField + ' userpick next button');
            skipAheadVideo();
          } else if (prevBtnId() === src) {
            // User tapped the skip back button
            console.log(scope.idField + ' userpick prev button');
            skipBackVideo();
          } else if (stopBtnId() === src) {
            // User tapped the stop button
            console.log(scope.idField + ' userpick stop button');
            stopVideo();
          } else if (playBtnId() === src) {
            // User tapped the play button
            console.log(scope.idField + ' userpick play button');
            playVideo();
          } else if (pinBtnId() === src) {
            // User tapped the pin button
            console.log(scope.idField + ' userpick pin button');
            scope.tagalongField = true;
          }
        });

        // User tapped the pause button
        scope.$root.$on('unpressed', function (evt, src) {
          if (playBtnId() === src) {
            console.log(scope.idField + ' userpick play button');
            pauseVideo();
          } else if (pinBtnId() === src) {
            console.log(scope.idField + ' userpick pin button');
            scope.tagalongField = false;
          }
        });

        // Recieved play ended from View
        scope.$root.$on('playended', function (evt, elementID, elementTagName, jsonData) {
          if (videoId() === elementID) {
            $timeout(function () {
              scope.playingField = false;
            }, 1);
          }
        });

        function updateVideoFrame() {
          if (scope.currentFrameSrc !== scope.srcField) {
            // Source changed, will need to get new frame data.
            scope.currentFrameInfo = undefined;
            scope.currentFrameSrc = scope.srcField;
          } else if (!scope.currentFrameInfo) {
            // New frame data was already requested, but it's not yet ready.
            // Don't request it again.
            return;
          }

          if (scope.currentFrameInfo) {
            // We already have frame and the soruce hasn't changed - just apply it.
            applyVideoFrame();
            return;
          }

          extractVideoFrame(scope.srcField).then(
            (args) => {
              scope.currentFrameInfo = args;
              applyVideoFrame();
              scope.$apply();
            },
            () => {
              console.log('[' + scope.idField + '] extractVideoFrame failed');
            }
          );
        }

        function applyVideoFrame() {
          updateWidgetSize(scope.currentFrameInfo);
          if (twx.app.isPreview()) {
            scope.videoWidget.setAttribute('src', scope.currentFrameInfo.dataUrl || '');
          }
        }

        function updateWidgetSize(args) {
          scope.data.videoWidth = args.width;
          scope.data.videoHeight = args.height;
          const areaRatio = Math.sqrt(
            (scope.data.videoPhysicalWidth * scope.data.videoPhysicalHeight) / (args.width * args.height)
          );
          scope.data.videoPhysicalWidth = args.width * areaRatio;
          scope.data.videoPhysicalHeight = args.height * areaRatio;

          let width = scope.data.videoPhysicalWidth + 2 * widget3dUtils.PanelEdgeMinMargin;
          if (!width || width < minWidth) {
            width = minWidth;
          }
          let buttonSize = widget3dUtils.getPanelMediaControlButtonsSize(width);

          let ratio = scope.data.videoHeight / scope.data.videoWidth;
          let height = (width - widget3dUtils.PanelEdgeMinMargin * 2) * ratio + widget3dUtils.PanelEdgeMinMargin * 2;

          if (scope.data.showControls) {
            height += widget3dUtils.PanelChildWidgetsMinMargin + buttonSize;
          }

          if (height < minHeight) {
            height = minHeight;
            let videoHeight = height - widget3dUtils.PanelEdgeMinMargin * 2;
            if (scope.data.showControls) {
              videoHeight -= widget3dUtils.PanelChildWidgetsMinMargin + buttonSize;
            }
            width = videoHeight / ratio + widget3dUtils.PanelEdgeMinMargin * 2;
          }

          //preventing double update for child widgets
          scope.data.width = undefined;
          scope.data.height = undefined;

          scope.buttonsSizeField = buttonSize;
          scope.heightField = height;
          scope.widthField = width;
        }

        function isEmptyOrSupportedVideoSource() {
          return (
            (scope.srcField && scope.srcField !== scope.data.src && widget3dUtils.isSupportedVideo(scope.srcField)) ||
            scope.srcField === ''
          );
        }

        scope.$watch('srcField', function () {
          if (isEmptyOrSupportedVideoSource()) {
            scope.data.src = scope.srcField || '';
            stopVideo();
            updateVideoFrame();
          }
        });

        scope.$watch('showcontrolsField', function () {
          const showcontrols = isBool(scope.showcontrolsField);
          if (scope.data.showControls !== showcontrols) {
            scope.data.showControls = showcontrols;
            const hidden = scope.data.showControls ? -1 : true;
            scope.prevBtnWidget.setAttribute('hidden', hidden);
            scope.nextBtnWidget.setAttribute('hidden', hidden);
            scope.stopBtnWidget.setAttribute('hidden', hidden);
            scope.playBtnWidget.setAttribute('hidden', hidden);
            if (scope.data.width && scope.data.height && scope.data.showControls !== undefined) {
              updateElements();
            }
          }
        });

        scope.$watch('widthField', function () {
          let width = Number(scope.widthField);
          if (scope.data.width !== width) {
            scope.data.width = width;
            scope.data.videoPhysicalWidth = scope.data.width - 2 * widget3dUtils.PanelEdgeMinMargin;
            if (scope.data.width && scope.data.height && scope.data.showControls !== undefined) {
              updateElements();
            }
          }
        });

        scope.$watch('heightField', function () {
          let height = Number(scope.heightField);
          if (scope.data.height !== height) {
            scope.data.height = height;
            scope.data.videoPhysicalHeight = scope.data.height - 2 * widget3dUtils.PanelEdgeMinMargin;
            if (scope.data.showControls) {
              scope.data.videoPhysicalHeight -=
                widget3dUtils.PanelChildWidgetsMinMargin +
                widget3dUtils.getPanelMediaControlButtonsSize(scope.data.width);
            }
            if (scope.data.width && scope.data.height && scope.data.showControls !== undefined) {
              updateElements();
            }
          }
        });

        scope.$watch('tagalongField', function () {
          scope.groupWidget.setAttribute('tagalong', scope.tagalongField);
          if (isBool(scope.tagalongField)) {
            scope.$parent.fireEvent('tethered');
          } else {
            scope.$parent.fireEvent('untethered');
          }
        });

        // Handle external events (service calls)
        scope.$watch('delegateField', function (delegate) {
          if (delegate) {
            delegate.play = function () {
              playVideo();
            };
            delegate.pause = function () {
              pauseVideo();
            };
            delegate.stop = function () {
              stopVideo();
            };
            delegate.skipahead = function () {
              skipAheadVideo();
            };
            delegate.skipback = function () {
              skipBackVideo();
            };
          }
        });

        function extractVideoFrame(src) {
          return new Promise((resolve, reject) => {
            scope.data.loadedVideo = document.createElement('video');
            scope.data.loadedVideo.currentTime = 0.33; // Approximately 10th frame, don't use the first one.
            scope.data.loadedVideo.preload = 'metadata';
            scope.data.loadedVideo.onerror = function (event) {
              console.warn('[' + scope.idField + '] Video loading error: ', scope.data.loadedVideo.error.message);
              reject();
            };
            if (twx.app.isPreview()) {
              // preview needs to create a placeholder image
              scope.data.loadedVideo.addEventListener('canplay', () => {
                const canvas = document.createElement('canvas');
                canvas.width = scope.data.loadedVideo.videoWidth;
                canvas.height = scope.data.loadedVideo.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(
                  scope.data.loadedVideo,
                  0,
                  0,
                  scope.data.loadedVideo.videoWidth,
                  scope.data.loadedVideo.videoHeight
                );
                resolve({
                  // jpeg doesn't seem to work with setTexture.
                  dataUrl: canvas.toDataURL('image/png'),
                  width: scope.data.loadedVideo.videoWidth,
                  height: scope.data.loadedVideo.videoHeight,
                });
              });
            } else {
              //View doesn't need the placeholder image
              scope.data.loadedVideo.addEventListener('loadedmetadata', (event) => {
                console.log('[' + scope.idField + '] video resolution available');
                resolve({
                  width: scope.data.loadedVideo.videoWidth,
                  height: scope.data.loadedVideo.videoHeight,
                });
              });
            }
            // setting video source starts preload
            scope.data.loadedVideo.src = widget3dUtils.externalizeUrl(src);
          });
        }
      },
    };
  }

  var Video3DModule = angular.module('video3D-ng', ['ngWidget3dUtils']);
  Video3DModule.directive('ngVideo3d', [
    '$timeout',
    '$http',
    '$window',
    '$injector',
    '$sce',
    'widget3dUtils',
    ngVideo3D,
  ]);
})();

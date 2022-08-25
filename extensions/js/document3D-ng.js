if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'document3D-ng';
}

(function () {
  'use strict';
  const minWidth = widget3dUtils.getDocumentWidgetWidth(
    widget3dUtils.documentPageSizes[5].width,
    true,
    widget3dUtils.ButtonMinSize
  ); // A5 Portrait width
  const minHeight = widget3dUtils.getDocumentWidgetHeight(widget3dUtils.documentPageSizes[4].height); // A5 Landscape height
  const maxPdfReadAttempts = 5;

  function ngDocument3D($timeout, $http, $window, $injector, $sce, widget3dUtils) {
    return {
      restrict: 'EA',
      scope: {
        isholoField: '@',
        srcField: '@',
        widthField: '=',
        heightField: '=',
        showcontrolsField: '@',
        idField: '@',
        tagalongField: '=',
        buttonsSizeField: '@',
        isFirstPageField: '=',
        isLastPageField: '=',
        delegateField: '=',
      },

      link: function (scope, element, attr) {
        scope.data = {
          width: undefined,
          height: undefined,

          prevWidth: undefined,
          prevHeight: undefined,

          showControls: true,
          src: '',

          documentHandlerPromise: undefined,
          documentPropertiesObject: undefined,
          documentFrameDimensions: undefined,

          documentFinishedLoading: false,

          documentCurrentPage: 1, // The current page the user is seeing.
          documentPageNumber: 0, // The maximum amount of pages in the current document.

          currentPageDimensions: undefined,
          currentPagePromise: undefined,

          // When a document is loaded and either width or height are modified, the other property will be modified as well.
          // This means that $watch will be triggered for the new property.
          // The flag below serves to prevent this redundant computation.
          skipDimensionsCorrections: false,
        };

        scope.renderer = $window.cordova ? vuforia : $injector.get('threeJsTmlRenderer');

        function scrollToTopBtnId() {
          return scope.idField + '-scroll-to-top';
        }
        function pageUpBtnId() {
          return scope.idField + '-page-up';
        }
        function pageDownBtnId() {
          return scope.idField + '-page-down';
        }
        function documentId() {
          return scope.idField + '-document';
        }
        function pageNumberId() {
          return scope.idField + '-page-number';
        }
        function pinBtnId() {
          return scope.idField + '-pin';
        }
        function panelId() {
          return scope.idField + '-panel';
        }
        scope.groupWidget = element[0].children.namedItem(scope.idField);

        scope.panelWidget = scope.groupWidget.children.namedItem(panelId());
        scope.documentWidget = scope.groupWidget.children.namedItem(documentId());
        scope.pageNumberWidget = scope.groupWidget.children.namedItem(pageNumberId());

        scope.scrollToTopBtnWidget = scope.groupWidget.children
          .namedItem(scrollToTopBtnId())
          .children.namedItem(scrollToTopBtnId());
        scope.pageUpBtnWidget = scope.groupWidget.children.namedItem(pageUpBtnId()).children.namedItem(pageUpBtnId());
        scope.pageDownBtnWidget = scope.groupWidget.children
          .namedItem(pageDownBtnId())
          .children.namedItem(pageDownBtnId());

        scope.pinBtnWidget = scope.groupWidget.children.namedItem(pinBtnId()).children.namedItem(pinBtnId());

        scope.isFirstPageField = true;
        scope.isLastPageField = true;

        const relocateWidgetElements = function (width, height, showControlsFlag) {
          console.log('[' + scope.idField + '] is updating sizes and locations of its elements');
          // Calculate new position for buttons:
          const pinBtnPosSize = widget3dUtils.getPanelPinButtonRelativePositionAndSize(width, height);
          const btnSize = Number(scope.buttonsSizeField);
          const assetsPosSize = widget3dUtils.getPanelDocumentControlButtonsImagesRelativePositionsAndSize(
            width,
            height,
            btnSize,
            !showControlsFlag
          );

          scope.documentWidget.setAttribute('x', assetsPosSize.xPageImage);
          scope.documentWidget.setAttribute('y', 0);
          scope.documentWidget.setAttribute('z', 0);

          if (showControlsFlag) {
            const controlPanelWidgets = [
              scope.scrollToTopBtnWidget,
              scope.pageUpBtnWidget,
              scope.pageNumberWidget,
              scope.pageDownBtnWidget,
            ];
            const yButtonValues = [
              assetsPosSize.yScrollToTop,
              assetsPosSize.yPageUp,
              assetsPosSize.yPageNumber,
              assetsPosSize.yPageDown,
            ];
            const controlPanelElementDimensions = [
              // Width Height
              [btnSize, btnSize],
              [btnSize, btnSize],
              [btnSize, 0.5 * btnSize],
              [btnSize, btnSize],
            ];
            controlPanelWidgets.forEach((controlPanelElement, index) => {
              controlPanelElement.setAttribute('width', controlPanelElementDimensions[index][0]);
              controlPanelElement.setAttribute('height', controlPanelElementDimensions[index][1]);
              controlPanelElement.setAttribute('y', yButtonValues[index]);
              controlPanelElement.setAttribute('z', 0);
              controlPanelElement.setAttribute('x', assetsPosSize.x);
            });
          }
          scope.pinBtnWidget.setAttribute('width', pinBtnPosSize.size);
          scope.pinBtnWidget.setAttribute('height', pinBtnPosSize.size);
          scope.pinBtnWidget.setAttribute('x', pinBtnPosSize.x);
          scope.pinBtnWidget.setAttribute('y', pinBtnPosSize.y);
          scope.pinBtnWidget.setAttribute('z', pinBtnPosSize.z);
          let noSource = !scope.srcField || scope.srcField === '';
          if (!noSource) {
            scope.$apply();
          }
        };

        const calculateDocumentFrameDimensions = function (inputWidth, inputHeight, forceUpdate = false) {
          let noNeedToUpdate = scope.data.documentFrameDimensions && !forceUpdate;
          if (noNeedToUpdate) {
            // A new document, or any other call will not modify the frame's dimensions unless the update
            // is forced.
            return;
          }
          // Controls are shown when entering preview since this cannot be set to hide
          // during design, but this is here in case this changes in the future.
          let docFrameWidth = widget3dUtils.getDocImageWidth(
            inputWidth,
            !scope.data.showControls,
            Number(scope.buttonsSizeField)
          );
          let docFrameHeight = widget3dUtils.getDocImageHeight(inputHeight);
          scope.data.documentFrameDimensions = {
            width: docFrameWidth,
            height: docFrameHeight,
          };
          if (scope.data.documentFinishedLoading) {
            scope.data.currentPagePromise.then(() => {
              adjustPageImageToDocumentFrame();
            });
          }
        };

        const adjustPageImageToDocumentFrame = function () {
          // This function stretches the image of the currently displayed page to the
          // document frame as much as possible.

          // Note that any conversion between pixels and physical length is irrelevant
          // since all units match.
          let currentPagePixelWidth = scope.data.currentPageDimensions.width;
          let currentPagePixelHeight = scope.data.currentPageDimensions.height;

          let docFrameWidth = scope.data.documentFrameDimensions.width;
          let docFrameHeight = scope.data.documentFrameDimensions.height;

          let newPicDimensions = widget3dUtils.calculatePageImageDimensions(
            currentPagePixelWidth,
            currentPagePixelHeight,
            docFrameWidth,
            docFrameHeight
          );

          let newPicWidth = newPicDimensions.width;
          let newPicHeight = newPicDimensions.height;

          let currentWidth = Number(scope.documentWidget.getAttribute('width'));
          let currentHeight = Number(scope.documentWidget.getAttribute('height'));

          if (newPicWidth !== currentWidth) {
            scope.documentWidget.setAttribute('width', newPicWidth);
          }
          if (newPicHeight !== currentHeight) {
            scope.documentWidget.setAttribute('height', newPicHeight);
          }
          scope.$apply();
        };

        const updateDocumentProperties = function (sourceFile) {
          const previousCallLoadedDocument = scope.data.documentFinishedLoading;
          scope.data.documentFinishedLoading = false;

          scope.data.documentPageNumber = 0;
          scope.data.documentCurrentPage = 1;

          scope.data.documentHandlerPromise = undefined;
          scope.data.documentPropertiesObject = undefined;

          if (!widget3dUtils.isSupportedDocument(sourceFile)) {
            scope.isFirstPageField = true;
            scope.isLastPageField = true;
            scope.pageNumberWidget.setAttribute('text', '');
            if (previousCallLoadedDocument) {
              // Running $apply() twice causes an error during preview.
              // The loading events call $apply() once the event is called.
              scope.$apply();
            }
            if (sourceFile === '' || sourceFile === undefined) {
              console.log(
                'The src is an empty string. The loaded document for ' + scope.idField + ' has been cleared.'
              );
            }
            console.error('Unsupported file type for ' + scope.idField + '.');
            return;
          }

          offThreadDocumentLoad(sourceFile, previousCallLoadedDocument);
        };

        const offThreadDocumentLoad = async function (sourceFile, previousCallLoadedDocument) {
          if (scope.data.currentPagePromise) {
            // Don't continue loading the document until the page from the previous
            // one has finished resizing.
            await scope.data.currentPagePromise;
          }
          let pdfReadAttemptsLeft = maxPdfReadAttempts;
          let loadSuccess = false;
          while (!loadSuccess && pdfReadAttemptsLeft > 0) {
            try {
              scope.data.documentHandlerPromise = documentReadAttempt(sourceFile);
              await scope.data.documentHandlerPromise;
              loadSuccess = true;
            } catch (err) {
              if (err.toString() === 'InvalidPDFException: Invalid PDF structure.') {
                pdfReadAttemptsLeft--;
                console.log('Failed document retrieval. Attempts left: ' + pdfReadAttemptsLeft.toString());
              } else {
                pdfReadAttemptsLeft = 0;
              }
            }
          }
          if (pdfReadAttemptsLeft === 0) {
            scope.data.documentHandlerPromise = undefined;
            scope.data.documentPropertiesObject = undefined;
            scope.pageNumberWidget.setAttribute('text', '');
            scope.isFirstPageField = true;
            scope.isLastPageField = true;
            if (previousCallLoadedDocument) {
              scope.$apply();
            }
            console.log('Error obtaining properties of "' + sourceFile + '". Make sure the file exists.');
          }
        };

        const documentReadAttempt = function (sourceFile) {
          let documentHandler = undefined;
          try {
            documentHandler = pdfjsLib.getDocument(sourceFile);
          } catch (_) {
            console.error('Failed to create a file handler for "' + sourceFile + '".');
            return;
          }
          return documentHandler.promise
            .then(function (docProps) {
              scope.data.documentCurrentPage = 1;
              scope.data.documentPropertiesObject = docProps;
              scope.data.documentPageNumber = docProps.numPages;
              scope.isLastPageField = !(scope.data.documentPageNumber > 1);
              scope.data.documentFinishedLoading = true;

              console.log(sourceFile + ' loaded succesfully.');
            })
            .then(function () {
              // The first page of the document is rendered by a call from the tml.
              gotoRequestedPage(1, false);
            });
        };

        const updateWidgetDimensions = function (updatedHeight) {
          const btnSize = Number(scope.buttonsSizeField);
          const hideControls = !scope.data.showControls;
          let newHeight = scope.data.height;
          let newWidth = scope.data.width;
          let ratio = scope.data.documentFrameDimensions.height / scope.data.documentFrameDimensions.width;

          if (updatedHeight) {
            if (newHeight < minHeight) {
              newHeight = minHeight;
            }
            newWidth = widget3dUtils.adjustDocumentWidgetWidth(newHeight, ratio, hideControls, btnSize);
            if (newWidth < minWidth) {
              newWidth = minWidth;
              newHeight = widget3dUtils.adjustDocumentWidgetHeight(newWidth, ratio, hideControls, btnSize);
            }
          } else {
            if (newWidth < minWidth) {
              newWidth = minWidth;
            }
            newHeight = widget3dUtils.adjustDocumentWidgetHeight(newWidth, ratio, hideControls, btnSize);
            if (newHeight < minHeight) {
              newHeight = minHeight;
              newWidth = widget3dUtils.adjustDocumentWidgetWidth(newHeight, ratio, hideControls, btnSize);
            }
          }
          newWidth = Number(newWidth).toFixed(3);
          newHeight = Number(newHeight).toFixed(3);

          // If height is the parameter that's been updated check if width has changed.
          let insideWidthChange = newWidth !== scope.data.width && updatedHeight;
          // If not check if height has changed.
          let insideHeightChange = newHeight !== scope.data.height && !updatedHeight;
          // If either was changed ignore the next change call, since it will needlessly rerun this
          // computation.
          scope.data.skipDimensionsCorrections = insideWidthChange || insideHeightChange;

          scope.data.width = newWidth;
          scope.data.height = newHeight;
          scope.panelWidget.setAttribute('sx', newWidth);
          scope.panelWidget.setAttribute('sy', newHeight);
          scope.widthField = newWidth;
          scope.heightField = newHeight;
          scope.$apply();
        };

        const updateElements = function (updatedHeight) {
          let cannotUpdate = !scope.data.width || !scope.data.height || scope.data.showControls === undefined;
          if (cannotUpdate) {
            return;
          }
          // The logic below makes it so that changing the width or the height will adhere to the document's
          // current frame's height to width ratio if a document is loaded. If no document is loaded, width or height modifications will be
          // straightforward without any adjustments.
          if (scope.data.documentFinishedLoading) {
            // Update the dimensions based on the current frame.
            updateWidgetDimensions(updatedHeight);

            // Force a change to the dimensions, but since the height and width were already adjusted according to the
            // previous dimensions, this will not cause a change to the height to width ratio.
            calculateDocumentFrameDimensions(scope.data.width, scope.data.height, true);
          } else {
            // If a document is not present the frame's proportions must change.
            calculateDocumentFrameDimensions(scope.data.width, scope.data.height, true);
          }
          relocateWidgetElements(scope.data.width, scope.data.height, scope.data.showControls);
        };

        const hideShowControls = function () {
          const hidden = scope.data.showControls ? -1 : true;
          scope.scrollToTopBtnWidget.setAttribute('hidden', hidden);
          scope.pageUpBtnWidget.setAttribute('hidden', hidden);
          scope.pageDownBtnWidget.setAttribute('hidden', hidden);
          scope.pageNumberWidget.setAttribute('hidden', hidden);
        };

        const gotoRequestedPage = function (requestedPage, callRendererFunction = true) {
          scope.pageNumberWidget.setAttribute('text', requestedPage + '/' + scope.data.documentPageNumber);
          scope.isFirstPageField = requestedPage === 1;
          scope.isLastPageField = requestedPage === scope.data.documentPageNumber;

          if (callRendererFunction) {
            let params = {
              id: documentId(),
              pageNumber: requestedPage,
            };
            scope.renderer.navigateToPage(params);
          }

          scope.data.currentPagePromise = scope.data.documentPropertiesObject.getPage(requestedPage).then((page) => {
            let viewport = page.getViewport({ scale: 1 });
            let currentPagePixelWidth = viewport.width;
            let currentPagePixelHeight = viewport.height;
            scope.data.currentPageDimensions = {
              width: currentPagePixelWidth,
              height: currentPagePixelHeight,
            };
            adjustPageImageToDocumentFrame();
          });
        };

        const gotoNextPage = function () {
          setTimeout(function () {
            if (scope.renderer.navigateToPage && scope.data.documentFinishedLoading) {
              console.log('next page ' + scope.idField);
              if (scope.data.documentCurrentPage < scope.data.documentPageNumber) {
                scope.data.documentCurrentPage++;
                gotoRequestedPage(scope.data.documentCurrentPage);
              }
            }
          }, 1);
        };

        const gotoPreviousPage = function () {
          setTimeout(function () {
            if (scope.renderer.navigateToPage && scope.data.documentFinishedLoading) {
              console.log('previous page ' + scope.idField);
              if (scope.data.documentCurrentPage > 1) {
                scope.data.documentCurrentPage--;
                gotoRequestedPage(scope.data.documentCurrentPage);
              }
            }
          }, 1);
        };

        const gotoStart = function () {
          setTimeout(function () {
            if (scope.renderer.navigateToPage && scope.data.documentFinishedLoading) {
              console.log('scroll to start ' + scope.idField);
              if (scope.data.documentCurrentPage > 1) {
                scope.data.documentCurrentPage = 1;
                gotoRequestedPage(scope.data.documentCurrentPage);
              }
            }
          }, 1);
        };

        const gotoEnd = function () {
          setTimeout(function () {
            if (scope.renderer.navigateToPage && scope.data.documentFinishedLoading) {
              console.log('scroll to end ' + scope.idField);
              if (scope.data.documentCurrentPage < scope.data.documentPageNumber) {
                scope.data.documentCurrentPage = scope.data.documentPageNumber;
                gotoRequestedPage(scope.data.documentCurrentPage);
              }
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

        scope.$root.$on('documentloadednative', function (evt, src, tag, load) {
          if (src === documentId()) {
            let eventData = {
              id: src,
              src: load,
            };
            scope.$parent.fireEvent('documentloaded', eventData);
            scope.$apply();
          }
        });

        scope.$root.$on('documentfailednative', function (evt, src, tag, load) {
          if (src === documentId()) {
            let eventData = {
              id: src,
              src: load,
            };
            scope.$parent.fireEvent('documentfailed', eventData);
            if (load.endsWith('.pdf')) {
              scope.$apply();
            }
          }
        });

        scope.$root.$on('pressed', function (evt, src) {
          console.log('on pressed event detected.');
          console.log(src);
          switch (src) {
            case scrollToTopBtnId():
              // User tapped the scroll to top button.
              console.log(scope.idField + ' userpick scroll to top button');
              gotoStart();
              break;
            case pageUpBtnId():
              // User tapped the page up button.
              console.log(scope.idField + ' userpick page up button');
              gotoPreviousPage();
              break;
            case pageDownBtnId():
              // User tapped the page down button.
              console.log(scope.idField + ' userpick page down button');
              gotoNextPage();
              break;
            case pinBtnId():
              // User tapped the pin button, enabling tagalong.
              console.log(scope.idField + ' userpick pin button');
              scope.tagalongField = true;
              break;
            default:
            // No default - $on('pressed', function) activates on a global scale, not just
            // for this widget.
          }
        });

        scope.$root.$on('unpressed', function (evt, src) {
          if (pinBtnId() === src) {
            // User tapped the pin button, disabling tagalong.
            console.log(scope.idField + ' userpick pin button');
            scope.tagalongField = false;
          }
        });

        scope.$watch('srcField', function () {
          if (scope.data.src !== scope.srcField) {
            if (scope.data.documentHandlerPromise) {
              scope.data.documentHandlerPromise.finally(() => {
                scope.data.src = scope.srcField;
                updateDocumentProperties(scope.data.src);
              });
            } else {
              scope.data.src = scope.srcField;
              updateDocumentProperties(scope.data.src);
            }
          }
        });

        scope.$watch('showcontrolsField', function () {
          // Set an initial frame based on the current dimensions
          // with hide controls at its default value.
          calculateDocumentFrameDimensions(Number(scope.widthField), Number(scope.heightField));
          const showcontrols = isBool(scope.showcontrolsField);
          if (scope.data.showControls === showcontrols) {
            return;
          }
          if (scope.data.documentHandlerPromise) {
            scope.data.documentHandlerPromise.finally(() => {
              scope.data.showControls = showcontrols;
              hideShowControls();
              updateElements(true);
            });
          } else {
            scope.data.showControls = showcontrols;
            hideShowControls();
            updateElements(true);
          }
        });

        scope.$watch('widthField', function () {
          // Set an initial frame based on the current dimensions if it was not set before.
          calculateDocumentFrameDimensions(Number(scope.widthField), Number(scope.heightField));
          let width = Number(scope.widthField);
          if (scope.data.prevWidth === width) {
            scope.data.skipDimensionsCorrections = false;
            return;
          }
          scope.data.prevWidth = width;
          if (scope.data.skipDimensionsCorrections) {
            // If this is being called because of an auto adjustment due to a modified height, skip this run.
            scope.data.skipDimensionsCorrections = false;
            return;
          }
          if (scope.data.documentHandlerPromise) {
            scope.data.documentHandlerPromise.finally(() => {
              scope.data.width = width;
              updateElements(false);
            });
          } else {
            scope.data.width = width;
            updateElements(false);
          }
        });

        scope.$watch('heightField', function () {
          // Set an initial frame based on the current dimensions if it was not set before.
          calculateDocumentFrameDimensions(Number(scope.widthField), Number(scope.heightField));
          let height = Number(scope.heightField);
          if (scope.data.prevHeight === height) {
            scope.data.skipDimensionsCorrections = false;
            return;
          }
          scope.data.prevHeight = height;
          if (scope.data.skipDimensionsCorrections) {
            // If this is being called because of an auto adjustment due to a modified width, skip this run.
            scope.data.skipDimensionsCorrections = false;
            return;
          }
          if (scope.data.documentHandlerPromise) {
            scope.data.documentHandlerPromise.finally(() => {
              scope.data.height = height;
              updateElements(true);
            });
          } else {
            scope.data.height = height;
            updateElements(true);
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
            delegate.gotostart = function () {
              if (scope.data.documentHandlerPromise) {
                scope.data.documentHandlerPromise.then(() => {
                  gotoStart();
                });
              } else {
                gotoStart();
              }
            };
            delegate.gotoend = function () {
              if (scope.data.documentHandlerPromise) {
                scope.data.documentHandlerPromise.then(() => {
                  gotoEnd();
                });
              } else {
                gotoEnd();
              }
            };
          }
        });
      },
    };
  }

  var Document3DModule = angular.module('document3D-ng', ['ngWidget3dUtils']);
  Document3DModule.directive('ngDocument3d', [
    '$timeout',
    '$http',
    '$window',
    '$injector',
    '$sce',
    'widget3dUtils',
    ngDocument3D,
  ]);
})();

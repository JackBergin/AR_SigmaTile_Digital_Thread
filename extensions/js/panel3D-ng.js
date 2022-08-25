if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'panel3D-ng';
}

(function () {
  'use strict';

  function ngPanel3D($timeout, $interval, $http, $window, $injector, widget3dUtils) {
    return {
      restrict: 'EA',
      scope: {
        idField: '@',
        isholoField: '@',
        shaderField: '@',
        visibleField: '@',
        widthField: '@',
        heightField: '@',
        tagalongField: '=',
        delegateField: '=',
      },
      link: function (scope, element, attr) {
        console.log('panel3D-ng loaded');
        scope.data = {
          affects: undefined,
          force: false,
          tagalong: undefined,
          args: undefined,
          disabled: true,
          visible: undefined,
          pending: undefined,
        };

        scope.renderer = $window.cordova ? vuforia : $injector.get('threeJsTmlRenderer');

        function isbool(v) {
          return v === 'true' || v === true;
        }

        function panelId() {
          return scope.idField + '-panel';
        }
        function pinBtnId() {
          return scope.idField + '-pin';
        }

        scope.groupWidget = element[0].children.namedItem(scope.idField);
        scope.panelWidget = scope.groupWidget.children.namedItem(panelId());
        scope.pinBtnWidget = scope.groupWidget.children.namedItem(pinBtnId()).children.namedItem(pinBtnId());

        scope.$watchGroup(['isholoField'], function () {
          const isHolo = isbool(scope.isholoField);
          if (isHolo && !twx.app.isPreview()) {
            scope.shaderField = 'ButtonEdge';
          }
        });

        scope.$watchGroup(['widthField', 'heightField'], function () {
          scope.data.width = scope.widthField ? parseFloat(scope.widthField) : widget3dUtils.PanelDefaultSize;
          scope.data.height = scope.heightField ? parseFloat(scope.heightField) : widget3dUtils.PanelDefaultSize;

          const pinBtnPosSize = widget3dUtils.getPanelPinButtonRelativePositionAndSize(
            Number(scope.data.width),
            Number(scope.data.height)
          );
          if (twx.app.isPreview()) {
            scope.renderer.setDimensions(pinBtnId(), {
              width: pinBtnPosSize.size,
              height: pinBtnPosSize.size,
            });
            scope.pinBtnWidget.setAttribute('x', pinBtnPosSize.x);
            scope.pinBtnWidget.setAttribute('y', pinBtnPosSize.y);
            scope.pinBtnWidget.setAttribute('z', pinBtnPosSize.z);

            scope.panelWidget.setAttribute('sx', Number(scope.data.width));
            scope.panelWidget.setAttribute('sy', Number(scope.data.height));
            scope.panelWidget.setAttribute('sz', 1);
          }
        });

        scope.$watch('visibleField', function () {
          scope.data.visible = isbool(scope.visibleField);
          if (scope.data.visible) {
            show();
          } else {
            hide();
          }
        });

        scope.$watch('tagalongField', function () {
          let initializing = scope.data.tagalong === undefined;
          scope.data.tagalong = isbool(scope.tagalongField);
          scope.groupWidget.setAttribute('tagalong', scope.data.tagalong);
          if (!initializing) {
            if (scope.data.tagalong) {
              scope.$parent.fireEvent('tethered');
            } else {
              scope.$parent.fireEvent('untethered');
            }
          }
        });
        const show = function () {
          scope.data.disabled = false;
          scope.groupWidget.setAttribute('hidden', false);
        };
        const hide = function () {
          scope.data.disabled = true;
          scope.groupWidget.setAttribute('hidden', true);
        };

        scope.$watch('delegateField', function (delegate) {
          if (delegate) {
            delegate.show = show;
            delegate.hide = hide;
          }
        });

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

        scope.$on('modelLoaded', function (evt, arg) {
          if (arg === scope.idField) {
            if (scope.data.visible) {
              show();
            } else {
              hide();
            }
          }
        });

        scope.$root.$on('pressed', function (evt, src) {
          if (pinBtnId() === src) {
            // User tapped the pin button
            console.log(scope.idField + ' userpick pin button');
            scope.tagalongField = true;
          }
        });

        scope.$root.$on('unpressed', function (evt, src) {
          if (pinBtnId() === src) {
            console.log(scope.idField + ' userpick pin button');
            scope.tagalongField = false;
          }
        });
      },
    };
  }

  const panel3DModule = angular.module('panel3D-ng', ['ngWidget3dUtils']);
  panel3DModule.directive('ngPanel3d', [
    '$timeout',
    '$interval',
    '$http',
    '$window',
    '$injector',
    'widget3dUtils',
    ngPanel3D,
  ]);
})();

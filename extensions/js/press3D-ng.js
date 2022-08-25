if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'press3D-ng';
}

(function () {
  'use strict';

  function ngPress3D($window, $injector, $timeout, widget3dUtils) {
    return {
      restrict: 'EA',
      scope: {
        isholoField: '@',
        widthField: '@',
        heightField: '@',
        fontField: '@',
        idField: '@',
        disabledField: '=',
        textField: '@',
        srcField: '@',
        colorField: '@',
      },
      link: function (scope, element, attr) {
        scope.data = {
          width: widget3dUtils.ButtonMinSize,
          height: widget3dUtils.ButtonMinSize,
          fontColor: '#ffffff',
          text: '',
          src: '',
        };

        scope.buttonWidget = element[0].children.namedItem(scope.idField);

        /**
         * Draws an Image and a label on a 3D Press Button
         * @param {*} widget
         * @param {*} src
         * @param {*} text
         * @param {*} pressed
         */
        function drawIconAndLabel(widget, src, text) {
          widget.id = scope.idField;
          return widget3dUtils.generateLabelAndIconImage(widget, element, src, text).then((imageData) => {
            $timeout(function () {
              scope.buttonWidget.setAttribute('src', imageData || '');
            }, 1);
          });
        }

        const updateTexture = function () {
          drawIconAndLabel(scope.data, scope.data.src, scope.data.text);
        };

        function toBool(v) {
          return v === 'true' || v === true;
        }

        scope.$root.$on('userpick', function (evt, src) {
          if (scope.idField === src && !toBool(scope.disabledField)) {
            scope.$parent.fireEvent('pressed', scope.idField);
          }
        });

        // these wont change often
        scope.$watch('disabledField', function () {
          const disabled = toBool(scope.disabledField);
          // ideally we would toggle the shader here, but whilst we can toggle between the prototype octo shaders, we
          // cannot untoggle and return to the built-inshader, wich actually shaders the button differently
          // the switch makes this inconsistent, so disabling it for now.

          const isHolo = toBool(scope.isholoField);
          if (isHolo && !twx.app.isPreview()) {
            scope.buttonWidget.setAttribute('shader', disabled ? 'ButtonEdge' : 'ButtonFullEffects');
          }
          scope.buttonWidget.setAttribute('color', disabled ? widget3dUtils.ButtonDisabledColor : scope.colorField);
        });

        scope.$watchGroup(['widthField', 'heightField', 'fontField', 'textField', 'srcField'], function () {
          scope.data.width = scope.widthField !== undefined ? Number(scope.widthField) : widget3dUtils.ButtonMinSize;
          scope.data.height = scope.heightField !== undefined ? Number(scope.heightField) : widget3dUtils.ButtonMinSize;
          scope.data.fontColor = scope.fontField || '#ffffff';
          scope.data.text = scope.textField || '';
          scope.data.src = scope.srcField || '';

          updateTexture();
        });
      },
    };
  }

  const press3DModule = angular.module('press3D-ng', ['ngWidget3dUtils']);
  press3DModule.directive('ngPress3d', ['$window', '$injector', '$timeout', 'widget3dUtils', ngPress3D]);
})();

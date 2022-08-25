if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'toggle3D-ng';
}

(function () {
  'use strict';

  function ngToggle3D($window, $injector, $timeout, widget3dUtils) {
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
        textnotpressedField: '@',
        srcField: '@',
        srcnotpressedField: '@',
        smalliconField: '@',
        multilinetextField: '@',
        pressedField: '=',
        delegateField: '=',
        colorField: '@',
      },
      link: function (scope, element, attr) {
        scope.data = {
          width: widget3dUtils.ButtonMinSize,
          height: widget3dUtils.ButtonMinSize,
          fontColor: '#ffffff',
          pressed: false,
          text: '',
          textNotPressed: '',
          src: '',
          srcNotPressed: '',
          smallIcon: true,
          multilineText: true,
          pressedTexture: undefined,
          unpressedTexture: undefined,
        };

        scope.buttonWidget = element[0].children.namedItem(scope.idField);

        // Draws an Image and a label on a 3D Toggle Button
        function drawIconAndLabel(widget, src, text) {
          widget.id = scope.idField;
          return widget3dUtils.generateLabelAndIconImage(widget, element, src, text, scope.data.smallIcon);
        }

        const updateTextures = () => {
          const defaultSrc = 'app/resources/Default/toggleMissing.png';
          drawIconAndLabel(
            scope.data,
            scope.data.src || scope.data.srcNotPressed || defaultSrc,
            scope.data.text || scope.data.textNotPressed
          ).then((imageData) => {
            $timeout(function () {
              scope.data.pressedTexture = imageData;
            }, 1);
          });

          drawIconAndLabel(
            scope.data,
            scope.data.srcNotPressed || scope.data.src || defaultSrc,
            scope.data.textNotPressed || scope.data.text
          ).then((imageData) => {
            $timeout(function () {
              scope.data.unpressedTexture = imageData;
            }, 1);
          });
        };

        const setPressed = (value) => {
          if (!toBool(scope.disabledField)) {
            scope.pressedField = value;
          }
        };

        function toBool(v) {
          return v === 'true' || v === true;
        }

        // User tapped the button
        scope.$root.$on('userpick', function (evt, src) {
          if (scope.idField === src) {
            setPressed(!scope.data.pressed);
          }
        });

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

        scope.$watchGroup(
          [
            'textnotpressedField',
            'srcnotpressedField',
            'textField',
            'srcField',
            'smalliconField',
            'multilinetextField',
            'fontField',
            'widthField',
            'heightField',
          ],
          function () {
            scope.data.text = scope.textField || '';
            scope.data.src = scope.srcField || '';
            scope.data.textNotPressed = scope.textnotpressedField || '';
            scope.data.srcNotPressed = scope.srcnotpressedField || '';
            scope.data.smallIcon = scope.smalliconField !== undefined ? toBool(scope.smalliconField) : true;
            scope.data.multilineText = scope.multilinetextField !== undefined ? toBool(scope.multilinetextField) : true;
            scope.data.fontColor = scope.fontField || '#ffffff';
            scope.data.width = scope.widthField !== undefined ? scope.widthField : widget3dUtils.ButtonMinSize;
            scope.data.height = scope.heightField !== undefined ? scope.heightField : widget3dUtils.ButtonMinSize;

            updateTextures();
          }
        );

        scope.$watch('pressedField', (newVal, oldVal) => {
          scope.data.pressed = toBool(scope.pressedField);
          if (scope.data.pressed) {
            if (scope.data.pressedTexture) {
              setSrc(scope.data.pressedTexture);
            }
          } else {
            if (scope.data.unpressedTexture) {
              setSrc(scope.data.unpressedTexture);
            }
          }
          if (newVal !== oldVal) {
            scope.$parent.fireEvent(scope.data.pressed ? 'pressed' : 'unpressed', scope.idField);
          }
        });

        scope.$watch('data.pressedTexture', () => {
          if (scope.data.pressed) {
            setSrc(scope.data.pressedTexture);
          }
        });

        scope.$watch('data.unpressedTexture', () => {
          if (!scope.data.pressed) {
            setSrc(scope.data.unpressedTexture);
          }
        });

        function setSrc(src) {
          // Setting undefined to the attribute will result in it being set to 'undefined' string.
          scope.buttonWidget.setAttribute('src', src || '');
        }

        // Handle external events (service calls)
        scope.$watch('delegateField', (delegate) => {
          if (delegate) {
            delegate.set = () => setPressed(true);
            delegate.reset = () => setPressed(false);
          }
        });
      },
    };
  }

  const Toggle3DModule = angular.module('toggle3D-ng', ['ngWidget3dUtils']);
  Toggle3DModule.directive('ngToggle3d', ['$window', '$injector', '$timeout', 'widget3dUtils', ngToggle3D]);
})();

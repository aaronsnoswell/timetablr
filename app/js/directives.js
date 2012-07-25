'use strict';

/* Directives */
var app = angular.module('timetablrApp');

angular.module('timetablrApp').directive('colorpicker', function() {

    return {
        require: '?ngModel',
        link: function(scope, element, attrs, controller) {
            var updateModel;

            if(controller != null) {
                updateModel = function(value) {
                    return scope.$apply(function() {
                        return controller.$setViewValue(value);
                    });
                };

                controller.$render = function() {
                    element[0].setAttribute("data-color", controller.$viewValue);
                    return element.colorpicker();
                };
            }

            return element.colorpicker().on('changeColor', function(e) {
                if(updateModel) updateModel(e.color.toHex());
            });

        }
    };
});


var configLayer = angular.module('configuration', ['ngRoute']);

var modelLayer = angular.module('model', ['configuration']);

var serviceLayer = angular.module('service', ['model']);

var ctrlLayer = angular.module('controller', ['service']);

ctrlLayer.directive('verticalGap', function() {
    return {
        restrict: 'E',
        template: '<div class="row"><span class="visible-lg"></span></div>'
    }
});

var app = angular.module('app', ['controller']);
var configLayer = angular.module('configuration', ['ngRoute']);

var modelLayer = angular.module('model', ['configuration']);

var serviceLayer = angular.module('service', ['configuration', 'model']);

var ctrlLayer = angular.module('controller', ['configuration', 'service']);

var app = angular.module('app', ['controller']);
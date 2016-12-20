var configLayer = angular.module('configuration', ['ngRoute']);

var modelLayer = angular.module('model', ['configuration']);

var serviceLayer = angular.module('service', ['model']);

var ctrlLayer = angular.module('controller', ['service']);

var app = angular.module('app', ['controller']);
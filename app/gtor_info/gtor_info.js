'use strict';

angular.module('myApp.gtor_info', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gtor_info', {
    templateUrl: 'gtor_info/gtor_info.html',
    controller: 'GtorInfoCtrl as gtorinfo'
  });
}])

.controller('GtorInfoCtrl', ['$location', '$window', function(location, $window) {
    this.test = 'foo';

    
    
}])
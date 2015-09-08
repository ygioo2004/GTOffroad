'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.mainpage',
  'myApp.calendar',
  'myApp.interested',
  'myApp.history',
  'myApp.rankings',
  'myApp.directives',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'mainpage'});
}])
.controller('RootCtrl', ['$rootScope','$location', '$scope', '$window', '$anchorScroll', '$timeout', function($rootScope, $location, $scope, $window, $anchorScroll, $timeout){
	this.changeLoc = function(addr){
		$location.url(addr);
	}
}])

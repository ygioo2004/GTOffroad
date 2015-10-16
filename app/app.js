'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
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
.controller('RootCtrl', ['$rootScope','$location', '$scope', '$anchorScroll', function($rootScope, $location, $scope, $anchorScroll){
	this.changeLoc = function(addr){
		$location.url(addr);
	}
}])
.run(function($rootScope, $window) {

  $rootScope.$on('$routeChangeSuccess', function () {

    var interval = setInterval(function(){
      if (document.readyState == 'complete') {
        $window.scrollTo(0, 0);
        clearInterval(interval);
      }
    }, 200);

  });
});
'use strict';

angular.module('myApp.how_do_i_join', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/how_do_i_join', {
    templateUrl: 'how_do_i_join/how_do_i_join.html',
    controller: 'HowDoIJoinCtrl as howjoin'
  });
}])

.controller('HowDoIJoinCtrl', ['$location', '$window', function(location, $window) {
    this.test = 'howJoin';

    
    
}])
'use strict';

angular.module('myApp.rankings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rankings', {
    templateUrl: 'rankings/rankings.html',
    controller: 'RankingsCtrl as rankings'
  });
}])

.controller('RankingsCtrl', ['$location', function(location) {
    this.test = 'foo';
}])
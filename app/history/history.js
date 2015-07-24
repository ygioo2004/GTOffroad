'use strict';

angular.module('myApp.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl as history'
  });
}])

.controller('HistoryCtrl', ['$location', function(location) {
        this.test = 'foo';

}])
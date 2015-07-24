'use strict';

angular.module('myApp.interested', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/interested', {
    templateUrl: 'interested/interested.html',
    controller: 'InterestedCtrl as interested'
  });
}])

.controller('InterestedCtrl', ['$location', function(location) {
        this.test = 'foo';

}])
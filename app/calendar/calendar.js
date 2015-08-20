'use strict';

angular.module('myApp.calendar', [
  'ngRoute', 
  'ui.calendar'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'calendar/calendar.html',
    controller: 'CalendarCtrl as calendar'
  });
}])

.controller('CalendarCtrl', ['$rootScope','$window', function($rootScope,$window) {
  
    this.uiConfig = {
      calendar:{
        height: 650,
        editable: false,
        googleCalendarApiKey: 'AIzaSyAMht8xAji5_1coADCfXjsn7On1J7Txagk',
        events: {
            googleCalendarId: 'georgiatechoffroad@gmail.com'
        },
        loading: function(bool) {
            $('#loading').toggle(bool);
        },
        header:{
          left: 'month basicWeek basicDay',
          center: 'title',
          right: 'today prev,next'
        }
            
      }
    };
    this.eventSources = [];
    
//    this.events = null;
//    this.eventSources=[this.events];
    

    
}]);
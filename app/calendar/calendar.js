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
        eventColor: 'steelblue',
        eventTextColor: 'white',
        height: 650,
        editable: false,
        googleCalendarApiKey: 'AIzaSyD0L6eWDQpoDh4QcWhwYjK7ZXmRaqwHB-8',
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
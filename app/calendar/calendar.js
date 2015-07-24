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
  
   $window.scroll(0,0);
    this.uiConfig = {
      calendar:{
        height: 650,
        editable: false,
        googleCalendarApiKey: 'AIzaSyBTbSupjRMeFtG775xgtECG37-kacTLOfA',
        events: {
            googleCalendarId: 'gtoffroadcalendar@gmail.com'
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
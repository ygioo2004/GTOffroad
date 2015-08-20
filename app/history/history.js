'use strict';

angular.module('myApp.history', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl as history'
  });
}])

.controller('HistoryCtrl', ['$location', '$window', 'HistoryYears', function(location, $window, historyYears) {
    this.years = historyYears.getHistoryYears();
    
}])

.factory('HistoryYears', [function(){
    return {
        getHistoryYears: function(){
            var years = [
                {
                    year: 2006,
                    desc: "This was the first time since 2000 that the team was unable to bring two vehicles to competition, the stress of building two cars the year before was not an experience many were willing to repeat. The '06' car saw significant changes to the front end of the car in an effort to gain more driver leg room and an emphasis was placed on lowering the center of gravity as much as possible. Complications during construction prevented the hi/low/reverse gearbox designed for the car from being ready for East, and the frankenstein-esque \"48 hour drivetrain\" was developed and installed in the 3 days leading up to competition. The '06 car is currently undergoing a major overhaul and will be running the teams first ever fully manual transmission for competition in 2007."
                },
                {
                    year: 2005,
                    desc: "Thanks to the generous support of our major sponsors, GT Off-Road was able to bounce back from the loss of our vehicles and tools and put together a new shop and two brand new cars. Names the New Black Car and the Grey Car, they were nearly identical in chassis design to Angus but changed to sprung lower arms in the rear and the Grey car respresented the team's first attempt at four wheel steering, which won the Polaris Suspension Design Award at the East competition that year. Rule changes after the West event in 2005 disallowed these cars from competing again in 2006."
                },
                {
                    year: 2004,
                    desc: "The 2004 car was named \"Black Angus\" or \"Angus\" for short. \"Angus\" was very similar to the \"black\" car in size and shape, the primary difference being a custom gearbox and a 2\" greater wheelbase. \"Angus\" competed in Portland and was ranked 12th in design at East before meeting the same fate as the \"Black\" car and was never seen again."
                },
                {
                    year: 2003,
                    desc: "The \"Black\" Car went to 3 competitions in 2003 and 2 in 2004 before it was stolen in Quebec at the East competition. This was the most successful car to date, placing 11th overall in Provo, UT in 2003."
                
                },
                {
                    year: 2002,
                    desc: "The \"Silver\" Car (named for its frame, which is not visible here) survived 6 competitions over 2 seasons including a top 10 finish in the East endurance event. It served as a driver-training vehicle, and then was retired in 2005."
                },
                {
                    year: 2001,
                    desc: "The \"White\" car was the second car designed by GT Off-Road. It made it through 6 competitions over 2 years and finished in the top 10 of the '02 East Endurance race. It served as a driver-training vehicle, and then was retired in 2005."
                },
                {
                    year: 2000,
                    desc: "The \"Yellow\" car was the first car built by GT Off-Road. It went to one race in Wisconsin and took top Rookie Honors. All but the frame was scrapped for parts, so the Yellow car lives on only in memory."
                }
               
            ]
            return years;
        }
    }
}]);
'use strict';

angular.module('myApp.rankings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rankings', {
    templateUrl: 'rankings/rankings.html',
    controller: 'RankingsCtrl as rankings'
  });
}])

.controller('RankingsCtrl', ['$location', '$window', function(location, $window) {
    $window.scroll(0,0);                         
    this.test = 'foo';
    this.ranks = [
        {
            year: 2003,
            locations: [
                {
                    name: 'East',
                    details: [
                        {
                            event: 'Design (silver car)',
                            place: 6
                        },{
                            event: 'Maneuverability (silver car)',
                            place: 11
                        },{
                            event: 'Overall (silver car)',
                            place: 23
                        },{
                            event: 'Maneuverability (black car)',
                            place: 14
                        },{
                            event: 'Overall (black car)',
                            place: 29
                        }
                    ]
                },
                {
                    name: 'Midwest',
                    details: [
                        {
                            event: 'Endurance (silver car)',
                            place: 10
                        },{
                            event: 'Drivetrain (silver car)',
                            place: 26
                        },{
                            event: 'Sled Pull (black car)',
                            place: 18
                        },{
                            event: 'Prodction (black car)',
                            place: 24
                        },{
                            event: 'Endurance (black car)',
                            place: 23
                        }
                    ]
                },
                {
                    name: 'West',
                    details: [
                        {
                            event: 'Sales',
                            place: 6
                        },{
                            event: 'Overall',
                            place: 11
                        },{
                            event: 'Endurance',
                            place: 11
                        }
                    ]
                }
            ]
        },
        {
            year: 2005,
            locations: [
                {
                    name: 'East',
                    details: [
                        {
                            event: 'Polaris Suspension Innovation and Design',
                            place: 1
                        },{
                            event: 'Acceleration',
                            place: 6
                        },{
                            event: 'Suspension & Tracking Course',
                            place: 10
                        }
                    ]
                },
                {
                    name: 'Midwest',
                    details: [
                        {
                            event: 'Endurance race',
                            place: 25
                        }
                    ]
                },
                {
                    name: 'West',
                    details: [
                        {
                            event: 'Rock Crawl',
                            place: 9
                        },{
                            event: 'Overall Design',
                            place: 10
                        },{
                            event: 'TARDEC award',
                            place: 10
                        },{
                            event: 'Endurance Race',
                            place: 19
                        }
                    ]
                }
            ]
        }
    ]
    console.log(this.ranks);
                             
}])
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
        },
        {
            year: 2006,
            locations: [
                {
                    name: 'Midwest',
                    details :[
                        {
                            event: 'Acceleration',
                            place: 38
                        },
                        {
                            event: 'Chain Pull',
                            place: 41
                        }
                    ]
                },
                {
                    name: 'East',
                    details: [
                        {
                            event: 'Overall Design',
                            place: 22
                        },
                        {
                            event: 'Water Maneuverability',
                            place: 20
                        },
                        {
                            event: 'Land Maneuverability',
                            place: 21
                        },
                        {
                            event: 'Suspension & Tracking Course',
                            place: 17
                        },
                        {
                            event: 'Overall',
                            place: 28
                        }
                        
                    ]
                }
            ]
        },
        {
            year: 2007,
            locations: [
                {
                    name: 'Rochester, NY',
                    details: [
                        {
                            event: 'Endurance',
                            place: 32
                        },
                        {
                            event: 'Overall',
                            place: 47
                        },
                        {
                            event: 'Acceleration',
                            place: 54
                        },
                        {
                            event: 'Manueverability',
                            place: 35
                        },
                        {
                            event: 'Hill Climb',
                            place: 40
                        },
                        {
                            event: 'Suspension & Traction',
                            place: 16
                        }
                    ]
                },
                {
                    name: 'South Dakota',
                    details: [
                        {
                            event: 'Endurance',
                            place: 56
                        },
                        {
                            event: 'Maneuverability',
                            place: 32
                        }
                        
                    ]
                }
            ]
        },
        {
            year: 2008,
            locations: [
                {
                    name: 'Tennesse',
                    details: [
                        {
                            event: 'Overall',
                            place: 11
                        },
                        {
                            event: 'Endurance',
                            place: 5
                        },
                        {
                            event: 'Autodesk Inventor Design Communication Award',
                            place: 2
                        }
                    ]
                },
                {
                    name: 'Montreal',
                    details: [
                        {
                            event: 'Overall',
                            place: 40
                        },
                        {
                            event: 'Suspension & Traction',
                            place: 20
                        }
                    ]
                }
            ]
        },
        {
            year: 2009,
            locations: [
                {
                    name: 'Alabama',
                    details: [
                        {
                            event: 'Overall',
                            place: 31
                        },
                        {
                            event: 'Endurance',
                            place: 48
                        },
                        {
                            event: 'Suspension & Traction',
                            place: 16
                        },
                        {
                            event: 'Pull',
                            place: 71
                        },
                        {
                            event: 'Land Manuverability',
                            place: 11
                        },
                        {
                            event: 'Acceleration',
                            place: 32
                        },
                        {
                            event: 'Cost',
                            place: 16
                        }
                        
                    ]
                },
                {
                    name: 'Wisconsin',
                    details: [
                        {
                            event: 'Overall',
                            place: 24
                        },
                        {
                            event: 'Endurance',
                            place: 26
                        },
                        {
                            event: 'Design',
                            place: 7
                        },
                        {
                            event: 'Cost',
                            place: 26
                        }
                        
                    ]
                },
                {
                    name: 'Tennesse',
                    details: [
                        {
                            event: 'Overall',
                            place: 11
                        },
                        {
                            event: 'Endurance',
                            place: 5
                        },
                        {
                            event: 'Autodesk Inventor Design Communication Award',
                            place: 2
                        }
                    ]
                },
                {
                    name: 'Montreal',
                    details: [
                        {
                            event: 'Overall',
                            place: 40
                        },
                        {
                            event: 'Suspension & Traction',
                            place: 20
                        }
                    ]
                }

            ]
        },
        {
            year: 2012,
            locations: [
                {
                    name: 'Auburn',
                    details: [
                        {
                            event: 'Suspension and Traction',
                            place: 12
                        },
                        {
                            event: 'Design',
                            place: 25
                        },
                        {
                            event: 'Cost',
                            place: 37
                        },
                        {
                            event: 'Endurance',
                            place: 63
                        },
                        {
                            event: 'Land Maneuverability',
                            place: 12
                        },
                        {
                            event: 'Acceleration',
                            place: 51
                        },
                        {
                            event: 'Hill Climb',
                            place: 59
                        },
                        {
                            event: 'Overall',
                            place: 47
                        },
                    ]
                }
            ]
        }
    ]
                             
}])
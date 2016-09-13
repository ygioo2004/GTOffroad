'use strict';

angular.module('myApp.sponsors', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sponsors', {
    templateUrl: 'sponsors/sponsors.html',
    controller: 'SponsorsCtrl as sponsors'
  });
}])

.controller('SponsorsCtrl', ['$location', function(location) {
    this.test = 'foo';
    
    //file names of logo images
    this.sponsors = {
        'gm' : "http://www.gm.com/",
        'caterpillar' : "http://www.caterpillar.com/",
        'john_deere' : "http://www.deere.com/",
        'briggs_stratton' : "http://www.briggsandstratton.com/",
        'chevron' : "http://www.chevron.com/",
        'sae' : "https://www.sae.org/",
        'fox_shox' : "http://www.ridefox.com/",
        'polaris' : "http://www.polaris.com/",
        'shell' : "http://www.shell.com/",
        'textron' : "http://www.textron.com/",
        'tie_down' : "http://www.tiedown.com/"
    }
    

}])
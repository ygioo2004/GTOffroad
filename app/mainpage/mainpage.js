'use strict';

angular.module('myApp.mainpage', [
    'ngRoute',
    'ngAnimate'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainpage', {
    templateUrl: 'mainpage/mainpage.html',
    controller: 'MainpageCtrl as mainpage'
  });
}])

.controller('MainpageCtrl', ['$location', 'boxDataService','$timeout',function(location, boxDataService) {
    var vm = this;

    vm.boxes;
    boxDataService.getData().then(function(res){
        vm.boxes = res.data;
        var counter = 0;
        angular.forEach (vm.boxes, function(value){
            value.clicked = false;
            value.num = counter;
            counter++;
        })
        
        vm.box = [
            vm.boxes.Calendar,
            vm.boxes.WhatIsGtor,
            vm.boxes.HowDoIJoin,
            vm.boxes.Interested,
            vm.boxes.PhotosAndVid,
            vm.boxes.History,
            vm.boxes.Rankings,
            vm.boxes.Contact,
            vm.boxes.Sponsors
	   ]
    });
  
    vm.images = [];
    var totalImages = 14
    for(var i = 1; i <= totalImages; i++){
        vm.images.push({
            src:'images/gallery/img-cycle' + i + '.jpg',
			num: i
        })
    }
}])

.service('boxDataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function() {
        return $http({
            url: 'mainpage/box_info.txt',
            dataType: 'json',
            method: 'GET',
            data: '',
            headers: {
                "Content-Type": "application/json"
            }
         });
    }
    
//    boxDataService.getData().then(function(res){
//        vm.boxData = res.data;
//        console.log(vm.boxData);
//    });
    

});
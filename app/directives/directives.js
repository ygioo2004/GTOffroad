'use strict';

angular.module('myApp.directives', [
  'ngRoute',
  'ngAnimate'
])
.directive('boxItem', ['$location', '$window', '$timeout', '$anchorScroll',function($location, $window, $timeout,$anchorScroll){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/boxItem.html',
        scope: {
            cycleNum: '=',
            data: '=',
            imageCycle: '='
        },
        controller: function($scope, $element){
            $scope.boxClicked = function(){
                if(!$scope.data.link){
                    $scope.data.clicked = !$scope.data.clicked;
                } else {
                    
                    //first scroll to top of screen
                    $location.hash("scrollTop");
                    $anchorScroll();
                    //then change location
                    $location.url($scope.data.link);

                }
            }
            
            $scope.currentSlide = 1;    // current picture slide
            var timeoutTime = 2500;     // how long in ms to wait before changing picture slide
            

            
            // this happens every 2500ms
            $scope.onTimeout = function(){
                $scope.currentSlide = $scope.currentSlide + 1;
                if ($scope.currentSlide > $scope.imageCycle.length) {
                    $scope.currentSlide = 1;
                }
                // restart timer
                $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);
            }
            
            // initial start for timer (timeout function must be defined before this)
            $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);          

            // when user manually changes slides
            $scope.changeSlide = function(num){
                
                // cancel current timeout and restart it so slide doesn't change at
                // the same time the user changes the slide
                $timeout.cancel($scope.mytimeout);
                $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);
                
                if (num == 0){
                    $scope.currentSlide = $scope.currentSlide - 1;
                    if ($scope.currentSlide < 1){
                        $scope.currentSlide = $scope.imageCycle.length;
                    }
                } else {
                    $scope.currentSlide = $scope.currentSlide + 1;
                    if ($scope.currentSlide > $scope.imageCycle.length){
                        $scope.currentSlide = 1;
                    }
                }
            }
            
//            var event;
//            function saveEvent(event) {
//                eventData.query(function(data){ 
//                    console.log("Event ID In: " + data.length); //value is accessible here
//                    event.id = data.length;
//                    eventData.save(event);
//                });
//            }
          
        } //controller

    } //return
}])
.directive('appFooter', [function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/footer.html',
        scope: {}
    }

}])

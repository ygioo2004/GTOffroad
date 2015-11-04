'use strict';

angular.module('myApp.directives', [
  'ngRoute',
  'ngAnimate'
])
.directive('boxItem', ['$location', '$window', '$timeout',function($location, $window, $timeout){
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
                    $location.url($scope.data.link);
                }
            }
            
            $scope.currentSlide = 1;
            var timeoutTime = 2500;
            $scope.onTimeout = function(){
                var temp = $scope.randImageIndex;
                $scope.currentSlide = $scope.currentSlide + 1;
                
                if ($scope.currentSlide > $scope.imageCycle.length) {
                    $scope.currentSlide = 1;
                }
                $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);
            }
            
            $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);          
            $scope.changeSlide = function(num){
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
            
            var event;
            function saveEvent(event) {
                eventData.query(function(data){ 
                    console.log("Event ID In: " + data.length); //value is accessible here
                    event.id = data.length;
                    eventData.save(event);
                });
            }
          
        }

    }
}])
.directive('appFooter', [function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/footer.html',
        scope: {}
    }

}])

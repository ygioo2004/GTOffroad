'use strict';

angular.module('myApp.directives', [
  'ngRoute',
  'ngAnimate'
])
.directive('boxItem', ['$location', '$window', '$anchorScroll', '$timeout',function($location, $window, $anchorScroll, $timeout){
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
//            var timeoutTime = 200000;
                        
            $scope.randImageIndex = 0;
            $scope.onTimeout = function(){
                var temp = $scope.randImageIndex;
                $scope.randImageIndex = Math.floor((Math.random() * $scope.imageCycle.length) + 1);

                while (temp == $scope.randImageIndex ){
                    $scope.randImageIndex = Math.floor((Math.random() * $scope.imageCycle.length) + 1);
                }

                $scope.currentSlide = $scope.randImageIndex;
                $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);
            }
            $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);          
            

            $scope.changeSlide = function(num){
                $timeout.cancel($scope.mytimeout);
                $scope.mytimeout = $timeout($scope.onTimeout,timeoutTime);
                if (num == 0){
                    $scope.currentSlide = $scope.currentSlide - 1;
                    if ($scope.currentSlide < 1){
                        $scope.currentSlide = 1;
                    }
                } else {
                    $scope.currentSlide = $scope.currentSlide + 1;
                    if ($scope.currentSlide > $scope.imageCycle.length){
                        $scope.currentSlide = $scope.imageCycle.length;
                    }
                }
	       }

            
            
            
        }

    }
}])
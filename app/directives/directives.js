'use strict';

angular.module('myApp.directives', [
  'ngRoute'
])
.directive('boxItem', ['$location', function($location){
    return {
        restrict: 'E',
        templateUrl: 'directives/templates/boxItem.html',
        scope: {
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
            $scope.currentSlide = 3;
            $scope.changeSlide = function(num){
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
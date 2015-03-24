/**
* sliderCtrl
*
*
*
* This is a custom controller that implements a new slide-pager for ionic
* that allows the pager to be placed anywhere on the app.
*/

angular.module('grassroots').controller('sliderCtrl', ['$rootScope', '$scope', sliderCtrl]);

function sliderCtrl($rootScope, $scope) {
    'use strict';

    $scope.pager = {
        total: 3,
        current: 0
    };

    $rootScope.$on('slidebox.slidechanged', function(e, obj) {
        console.log(obj);
        //$scope.pager.total = obj.numberOfSlides;
        $scope.pager.current = obj.currentIndex;
    });

    $scope.getCount = function(num) {
        return new Array(num);
    };
}

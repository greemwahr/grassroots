/**
* sliderCtrl
*
*
*
* This is a custom controller that implements a new slide-pager for ionic
* that allows the pager to be placed anywhere on the app.
*/

angular.module('grassroots').controller('sliderCtrl', ['$rootScope', sliderCtrl]);

function sliderCtrl($rootScope) {
    'use strict';

    $rootScope.pager = {
        total: 3,
        current: 0
    };

    $rootScope.$on('slidebox.slidechanged', function(e, obj) {
        $rootScope.pager.total = obj.numberOfSlides;
        $rootScope.pager.current = obj.currentIndex;
    });

    $rootScope.getCount = function(num) {
        return new Array(num);
    };
}

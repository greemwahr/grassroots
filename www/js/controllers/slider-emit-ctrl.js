/**
 * sliderEmitCtrl
 *
 *
 *
 *
 * This controller works in conjuction with the sliderCtrl to implement a new slide-pager component.
 */

angular.module('grassroots').controller('sliderEmitCtrl', ['$rootScope', '$state', '$ionicSlideBoxDelegate', sliderEmitCtrl]);

function sliderEmitCtrl($rootScope, $state, $ionicSlideBoxDelegate) {
    'use strict';

    $rootScope.data = {
        numViewableSlides: 0,
        slideIndex: 0,
        currentViewTitle: ""
    };

    var emitSlideBoxChanged = function () {
        $rootScope.$broadcast('slidebox.slidechanged', {
            currentIndex: $ionicSlideBoxDelegate.currentIndex(),
            numberOfSlides: $rootScope.data.numViewableSlides
        });
    };

    // Called each time the slide changes
    $rootScope.slideChanged = function (index) {
        $rootScope.data.slideIndex = index;

        if (index === 0) {
            $rootScope.data.currentViewTitle = "Presidential";

        } else if (index === 1) {
            $rootScope.data.currentViewTitle = "Senatorial";

        } else {
            $rootScope.data.currentViewTitle = "National Legislator";

        }

        emitSlideBoxChanged();
    };
    $rootScope.slideChanged(0);
}
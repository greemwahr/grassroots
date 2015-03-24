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
        slides: 0,
        currentViewTitle: "",
        currentViewTitleii: ""
    };

    var emitSlideBoxChanged = function () {
        $rootScope.$broadcast('slidebox.slidechanged', {
            currentIndex: $ionicSlideBoxDelegate.currentIndex(),
            numberOfSlides: $rootScope.data.numViewableSlides
        });
    };

    var countSlides = function() {
        $rootScope.data.numViewableSlides = 0;
        if($rootScope.data.slides !== null) {
            $rootScope.data.numViewableSlides === $rootScope.data.slides;
        }
        console.log($rootScope.data.numViewableSlides + "viewable slides");
    };

    countSlides();

    // Called each time the slide changes on National tab.
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

    //Called each time the slide changes on the Regional tab.
    $rootScope.slideChangedii = function (index) {
        $rootScope.data.slideIndex = index;

        if (index === 0) {
            $rootScope.data.currentViewTitleii = "Gubernatorial";

        } else {
            $rootScope.data.currentViewTitleii = "State Legislator";

        }

        emitSlideBoxChanged();
    };
    $rootScope.slideChangedii(0);
}

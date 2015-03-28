/**
 * menuLinkCtrl
 *
 * Used to create an ngClick controller to link the menu items to the slide-box index pages.
 * Also used obtain the current tabs and slide index and in conjunction with JSON file display the view title.
 */

angular.module('grassroots').controller('menuLinkCtrl', ['$scope', '$rootScope', '$state', '$ionicSideMenuDelegate', '$ionicTabsDelegate', '$ionicSlideBoxDelegate', menuLinkCtrl]);

function menuLinkCtrl($scope, $rootScope, $state, $ionicSideMenuDelegate, $ionicTabsDelegate, $ionicSlideBoxDelegate, $ionicNavBarDelegate) {
    'use strict';

    // $rootScope.record = {
    //     resultIndex: 0,
    // };

    $scope.indexSlide = function (index1, index2) {
        $ionicTabsDelegate.select(index1);
        $ionicSlideBoxDelegate.slide(index2);
    };

    $scope.$on("$ionicView.enter", function () {
        $ionicSlideBoxDelegate.update();
    });

    $scope.selectTabWithIndex = function (index) {
        $ionicTabsDelegate.select(index);
    };

    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
        $rootScope.record = {
            resultIndex: $ionicSlideBoxDelegate.currentIndex(),
        };
        console.log($rootScope.record.resultIndex);
    };

    $rootScope.record = {
        resultIndex: 0,
    };

    $ionicSideMenuDelegate.canDragContent(false);
}

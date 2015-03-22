/**
 * menuLinkCtrl
 *
 * Used to create an ngClick controller to link the menu items to the slide-box index pages.
 * Also used obtain the current tabs and slide index and in conjunction with JSON file display the view title.
 */

angular.module('grassroots').controller('menuLinkCtrl', ['$scope', '$ionicSideMenuDelegate', '$ionicTabsDelegate', '$ionicSlideBoxDelegate', menuLinkCtrl]);

function menuLinkCtrl($scope, $ionicSideMenuDelegate, $ionicTabsDelegate, $ionicSlideBoxDelegate) {
    'use strict';


    $scope.indexSlide = function (index1, index2) {
        $ionicTabsDelegate.select(index1);
        $ionicSlideBoxDelegate.slide(index2);
    };

    $scope.$on("$ionicView.enter", function () {
        $ionicSlideBoxDelegate.update();
    });

    $ionicSideMenuDelegate.canDragContent(false);
}

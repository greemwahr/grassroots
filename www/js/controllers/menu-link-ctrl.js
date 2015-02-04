/**
* menuLinkCtrl
*
* Used to create an ngClick controller to link the menu items to the slide-box index pages.
*/

angular.module('grassroots').controller('menuLinkCtrl', ['$scope', '$ionicTabsDelegate', '$ionicSlideBoxDelegate', menuLinkCtrl]);

function menuLinkCtrl($scope, $ionicTabsDelegate, $ionicSlideBoxDelegate) {
	'use strict';

	$scope.indexSlide = function(index1, index2) {
		$ionicTabsDelegate.select(index1);
		$ionicSlideBoxDelegate.slide(index2);
	};
}
/**
* googleAnalyticsCtrl
*
*
* This controller is for obtaining mobile app analytics using google analytics platforma and TrackingID UA-60469161-1
*/

angular.module('grassroots').controller('googleAnalyticsCtrl', ['$scope', googleAnalyticsCtrl]);

function googleAnalyticsCtrl($scope) {
    'use strict';

    if(typeof analytics !== "undefined") {analytics.trackView("GoogleAnalytics Controller");}

    $scope.initEvent = function() {
        if(typeof analytics !== "undefined") {analytics.trackEvent("Category", "Action", "Label", 25);}
    };
}

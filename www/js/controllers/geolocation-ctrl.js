/**
* geolocationCtrl
*
*
* This controller is used to obtain the positional information for the mobile app user. This controller employs the $cordovaGeolocaiton plugin
*/

angular.module('grassroots').controller('geolocationCtrl', ['$scope', '$cordovaGeolocation', '$ionicPlatform', geolocationCtrl]);

function geolocationCtrl($scope, $cordovaGeolocaiton, $ionicPlatform) {
    'use strict';

    var posOptions = {timeout: 10000, maximumAge: 20000, enableHighAccuracy: true};

    $scope.locate = function() {
        $cordovaGeolocation.getCurrentPosition (posOptions).then(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
        }, function(err) {
            console.log("Error " + err);
        });
    };

    $ionicPlatform.ready(function() {
        $scope.locate();
    });
}

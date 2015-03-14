/**
* Location-Picker Directive
*
*
* This script utilizes the reverse-geocoder service to fetch a set of options
* for the user.
*/



angular.module('grassroots').directive('locationPicker', ['$log', 'locationSrv', 'reverseGeocoderSrv', locationPicker]);

function locationPicker($log, locationSrv, reverseGeocoderSrv) {
    'use strict';

    return {
      restrict: 'E',
      require: '?ngModel',
      scope: {},
    //   templateUrl: 'location-picker/location-picker.html',
      link: function(scope, iElement, iAttrs, model) {

        scope.limitTo = scope.$eval(iAttrs.limitTo) || 15;

        // Get options
        locationSrv.ready(function() {
          reverseGeocoderSrv.geocode(location.current)
            .then(function(results) {
              scope.options = results;
            }, $log.error);
        });

        // Pick A Option
        scope.pickLocation = function(locData) {

          var locData = {
            latitude: location.current.latitude,
            longitude: location.current.longitude,
            name: locData.address_components[0].short_name,
            description: locData.formatted_address
          };

          // Update model
          model.$setViewValue(locData);
        };
      }
    };
  }

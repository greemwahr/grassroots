/**
* Reverse-Geocoder Service Provider
*
*
* This script converts geographic coordinates into human readable addresses
*/

angular.module('grassroots').factory('reverseGeocoderSrv', ['$document', '$q', reverseGeocoderSrv]);

function reverseGeocoderSrv($document, $q) {

    var service = {};

    $document.ready(function() {
      service.geocoder = new google.maps.Geocoder();
    });

    service.geocode = function(location) {
      var deferred = $q.defer();

      if (!location) {

        deferred.reject('You need to provide LatLng');

      } else {

        var latlng = new google.maps.LatLng(location.latitude, location.longitude);
      }


      // geocode
      service.geocoder.geocode({
        latLng: latlng
      }, function(results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {

          deferred.reject('No locations found');
          return;

        } else {

          deferred.resolve(results);
        }
      });

      return deferred.promise;
    };

    return service;
  };

/**
 * Firebase Service Provider
 *
 *
 *
 * This script provides the configuration and code for tying to the Firebase BaaS.
 */

angular.module('grassroots').factory('fireBaseSrv', ['$firebase', fireBaseSrv]);

var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function fireBaseSrv($firebase, $firebaseObject) {
    'use strict';

    var ref = new Firebase(firebaseUrl);

    return ref;
}

// let's create a re-usable factory that generates the $firebaseAuth instance
angular.module('grassroots').factory("Auth", ["$firebaseAuth",
  function ($firebaseAuth) {
        var ref = new Firebase(firebaseUrl);
        return $firebaseAuth(ref);
  }
  ]);

// Factory for submitting results to the firbase BaaS.
angular.module('grassroots').factory("ResultsService", ["$firebaseObject",
  function ($firebaseObject) {
        var ref = new Firebase(firebaseUrl);


        return {
            submitResults: function (tabName, slideName, uid, results, geoPosition, callback) {
                var userObj = $firebaseObject(ref.child('election').child(tabName).child(slideName).child(uid));
                userObj.submitAt = moment().format('MMMM Do YYYY, h:mm:ss a');
                //console.log(userObj.submitAt);
                userObj.results = results;
                userObj.location = geoPosition;

                userObj.$save().then(function (ref) {
                    //ref.key() === userObj.$id;
                    //console.log("User Object Saved");
                    callback(true);
                }, function (error) {
                    //console.log("Error:", error);
                    callback(false);
                });
            }
        };
  }
  ]);

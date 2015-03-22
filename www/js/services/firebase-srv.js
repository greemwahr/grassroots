/**
 * Firebase Service Provider
 *
 * This script provides the configuration and code for tying to the Firebase BaaS.
 */

angular.module('grassroots').factory('fireBaseSrv', ['$firebase', fireBaseSrv]);

var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function fireBaseSrv($firebase, $firebaseObject) {
    'use strict';

    var ref = new Firebase(firebaseUrl);

    return ref;

    // function electionResults() {
    // 	var resultObj  = {
    // 		'presidential' : ref.child('election/result/presidential'),
    // 		'senatorial': ref.child('election/result/senatorial'),
    // 		'natleg': ref.child('election/result/natleg'),
    // 		'gubernatorial' : ref.child('election/result/gubernatorial'),
    // 		'stateleg': ref.child('election/result/stateleg')
    // 	};
    //
    // 	return $firebaseObject(resultObj);
    // }

    function presidentialResults() {
        var presResl = ref.child('election/result/presidential');

        return $firebaseObject(presResl);
    }
}

// let's create a re-usable factory that generates the $firebaseAuth instance
angular.module('grassroots').factory("Auth", ["$firebaseAuth",
  function ($firebaseAuth) {
        var ref = new Firebase(firebaseUrl);
        return $firebaseAuth(ref);
  }
  ]);

angular.module('grassroots').factory("ResultsService", ["$firebase",
  function ($firebase) {
        var ref = new Firebase(firebaseUrl);


        return {
            submitResults: function (tabName, slideName, uid, results, geoPosition, callback) {
                var userObj = $firebase(ref.child('election').child(tabName).child(slideName).child(uid)).$asObject();
                userObj.submitAt = moment().format('MMMM Do YYYY, h:mm:ss a');
                console.log(userObj.submitAt);
                userObj.results = results;
                userObj.location = geoPosition;

                userObj.$save().then(function (ref) {
                    ref.key() === userObj.$id; // true
                    console.log("User Object Saved");
                    callback(true);
                }, function (error) {
                    console.log("Error:", error);
                    callback(false);
                });
            }
        }
  }
  ]);
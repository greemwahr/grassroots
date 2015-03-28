/**
 * recordPageCtrl
 *
 *
 *
 * A firebase sync controller for displaying the results submitted by a logged in facebook user.
 */

angular.module('grassroots').controller('recordPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', recordPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function recordPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
        'use strict';

        // var imgAbbr = inecSrv.getParties();
    	// $scope.imgAbbr = imgAbbr;

        var recfyre = new Firebase(firebaseUrl);
        //console.log(recfyre);

        $scope.list = function() {
                var fyrebaseAuth = recfyre.getAuth();
                var syncPres;
                // var partyAbbr;

                if (fyrebaseAuth) {
                    syncPres = $firebaseObject(recfyre.child("election/national/presidential/" + fyrebaseAuth.uid + "/results"));
                    syncPres.$bindTo($scope, "partyAbbr");
                    //console.log(syncPres);
                }
        };
}

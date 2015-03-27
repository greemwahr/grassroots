/**
* recordPageCtrl
*
*
*
* A firebase sync controller for displaying the results submitted by a logged in facebook user.
*/

angular.module('grassroots').controller('recordPageCtrl', ['$scope', '$rootScope', '$firebaseObject', 'firebaseSrv', recordPageCtrl]);

function recordPageCtrl($scope, $rootScope, $firebaseObject, firebaseSrv) {
    'use strict';

    $scope.list = function() {
        fyrebaseAuth = firebaseSrv.ref.getAuth();

        if(fyrebaseAuth) {
            var syncPres = $firebaseObject(ref.child("election/national/presidential" + fyrebaseAuth.uid));
            console.log(syncPres);
        }
    };
}

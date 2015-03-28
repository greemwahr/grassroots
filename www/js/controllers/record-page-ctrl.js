/**
 * The record page controllers.
 *
 *
 *
 * A firebase sync controller for displaying the results submitted by a logged in facebook user.
 */

angular.module('grassroots').controller('presPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', presPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function presPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
    'use strict';

    var recfyre = new Firebase(firebaseUrl);
    //console.log(recfyre);

    $scope.list = function() {
        var fyrebaseAuth = recfyre.getAuth();
        var syncPres;
        if (fyrebaseAuth) {
            syncPres = $firebaseObject(recfyre.child("election/national/presidential/" + fyrebaseAuth.uid + "/results"));
            syncPres.$bindTo($scope, "partyAbbr");
        }
    };
    $scope.list();
}

angular.module('grassroots').controller('senPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', senPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function senPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
    'use strict';

    var recfyre = new Firebase(firebaseUrl);
    //console.log(recfyre);

    $scope.list = function() {
        var fyrebaseAuth = recfyre.getAuth();
        var syncPres;
        if (fyrebaseAuth) {
            syncPres = $firebaseObject(recfyre.child("election/national/senatorial/" + fyrebaseAuth.uid + "/results"));
            syncPres.$bindTo($scope, "partyAbbr");
        }
    };
    $scope.list();
}

angular.module('grassroots').controller('natPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', natPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function natPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
    'use strict';

    var recfyre = new Firebase(firebaseUrl);
    //console.log(recfyre);

    $scope.list = function() {
        var fyrebaseAuth = recfyre.getAuth();
        var syncPres;
        if (fyrebaseAuth) {
            syncPres = $firebaseObject(recfyre.child("election/national/national-legislator/" + fyrebaseAuth.uid + "/results"));
            syncPres.$bindTo($scope, "partyAbbr");
        }
    };
    $scope.list();
}

angular.module('grassroots').controller('gubPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', gubPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function gubPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
    'use strict';

    var recfyre = new Firebase(firebaseUrl);
    //console.log(recfyre);

    $scope.list = function() {
        var fyrebaseAuth = recfyre.getAuth();
        var syncPres;
        if (fyrebaseAuth) {
            syncPres = $firebaseObject(recfyre.child("election/national/gubernatorial/" + fyrebaseAuth.uid + "/results"));
            syncPres.$bindTo($scope, "partyAbbr");
        }
    };
    $scope.list();
}

angular.module('grassroots').controller('staPageCtrl', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'inecSrv', staPageCtrl]);
var firebaseUrl = "https://sweltering-torch-3548.firebaseio.com";

function staPageCtrl($scope, $rootScope, $firebaseObject, $firebaseArray, inecSrv) {
    'use strict';

    var recfyre = new Firebase(firebaseUrl);
    //console.log(recfyre);

    $scope.list = function() {
        var fyrebaseAuth = recfyre.getAuth();
        var syncPres;
        if (fyrebaseAuth) {
            syncPres = $firebaseObject(recfyre.child("election/national/state-legislator/" + fyrebaseAuth.uid + "/results"));
            syncPres.$bindTo($scope, "partyAbbr");
        }
    };
    $scope.list();
}

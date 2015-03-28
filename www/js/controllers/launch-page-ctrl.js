/**
 * launchPageCtrl
 *
 * Controller for logging in with Facebook, Anonymous logon and also logout.
 */

angular.module('grassroots').controller('launchPageCtrl', ['$state', '$scope', '$ionicModal', 'fireBaseSrv', 'ezfb', '$rootScope', 'loaderSrv', launchPageCtrl]);

function launchPageCtrl($state, $scope, $ionicModal, fireBaseSrv, ezfb, $rootScope, loaderSrv) {
    'use strict';
    $scope.user = fireBaseSrv.ref().getAuth();
    $scope.anonuser = fireBaseSrv.ref().authAnonymously;

    //Login method
    $scope.login = function () {
        fireBaseSrv.ref().authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Login Failed", error);
            } else {
                console.log("Authenticated successfully with payload;", authData);
                $rootScope.loggedInUserID = authData.uid;
                $scope.user = fireBaseSrv.ref().getAuth();

                if ($scope.user !== null) {
                    $state.go('observer.national');
                }
            }
        });
    };

    //Anonymous login method
    $scope.anon = function () {
        loaderSrv.show();

        fireBaseSrv.ref().authAnonymously(function (error, authData) {
            if (error) {
                console.log("login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $rootScope.loggedInUserID = authData.uid;
                $scope.anonuser = fireBaseSrv.ref().authAnonymously;

                if ($scope.anonuser !== null) {
                    loaderSrv.hide();
                    $state.go('observer.national');
                    $scope.modal.hide();
                }
            }
        });
    };

    //Logout method
    $scope.logout = function () {
        //console.log('logout');
        fireBaseSrv.ref().unauth();
        //console.log('logout2');
        $state.go('launchpage');
        //console.log('logout3');
        $rootScope.loggedInUserID = "";
        //console.log($rootScope.loggedInUserID);
        $scope.user = null;
        ezfb.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                ezfb.logout();
            }
        });
        console.log('logout4');
    };
}

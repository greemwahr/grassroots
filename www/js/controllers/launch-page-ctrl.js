/**
* launchPageCtrl
*
* Controller for logging in with Facebook, Anonymous logon and also logout.
*/

angular.module('grassroots').controller('launchPageCtrl', ['$state', '$scope', '$ionicModal', 'fireBaseSrv', 'ezfb', launchPageCtrl]);

function launchPageCtrl($state, $scope, $ionicModal, fireBaseSrv, ezfb){
	'use strict';
	$scope.user = fireBaseSrv.ref().getAuth();
	// $scope.user = null;
	$scope.anonuser = fireBaseSrv.ref().authAnonymously;
	// $scope.anonuser = null;

	//Login method
	$scope.login = function() {
		fireBaseSrv.ref().authWithOAuthPopup("facebook", function(error, authData) {
		if (error) {
			console.log("Login Failed", error);
		} else {
			console.log("Authenticated successfully with payload;", authData);
			$scope.user = fireBaseSrv.ref().getAuth();
			if($scope.user !== null) {
				$state.go('observer.national');
			}
		}
	});
	};

	//Anonymous login method
	$scope.anon = function() {
		fireBaseSrv.ref().authAnonymously(function(error, authData) {
			if(error) {
				console.log("login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
				$scope.anonuser = fireBaseSrv.ref().authAnonymously;
				return $scope.anonuser;
			}
		});
			function anonvert() {
				if($scope.anonuser !== null) {
					$state.go('observer.national');
					$scope.modal.hide();
				}
			}
			return anonvert();
	};

	//Alternate logout method using facebook JS SDK.
	$scope.logout = function() {
		ezfb.getLoginStatus(function (response) {
			if (response && response.status === 'connected') {
				ezfb.logout();
			}
		});
	};

	//Logout method
	// $scope.logout = function() {
	// 	fireBaseSrv.ref().unauth();
	// 	$state.go('launchpage');
	// 	$scope.user = null;
	// };
}

/**
* launchPageCtrl
*
* Description
*/

angular.module('grassroots').controller('launchPageCtrl', ['$state', '$scope', '$ionicModal', 'fireBaseSrv', launchPageCtrl]);

function launchPageCtrl($state, $scope, $ionicModal, fireBaseSrv){
	'use strict';
	$scope.user = fireBaseSrv.ref().getAuth();
	$scope.anonuser = fireBaseSrv.ref().authAnonymously;

	//Login method
	$scope.login = function() {
		fireBaseSrv.ref().authWithOAuthPopup("facebook", function(error, authData) {
		if (error) {
			console.log("Login Failed", error);
		} else {
			console.log("Authenticated successfully with payload;", authData);
			$scope.user = fireBaseSrv.ref().getAuth();
		}
	});
		function divert() {
			if($scope.user !== null) {
				$state.go('observer.national');
			}
		}
		return divert();
	};

	//Anon login method
	$scope.anon = function() {
		fireBaseSrv.ref().authAnonymously(function(error, authData) {
			if(error) {
				console.log("login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
				return $scope.anonuser;
			}
		});
			function anonvert() {
				if($scope.anonuser !== null) {
					$state.go('observer.national');
				}
			}
			return anonvert();
	};


	//Logout method
	$scope.logout = function() {
		fireBaseSrv.ref().unauth();
		$state.go('launchpage');
	};
}
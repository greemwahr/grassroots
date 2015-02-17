/**
* popUpCtrl
*
*
* Controller for creating pop-ups to allow user confirm their GPS location.
*/

angular.module('grassroots').controller('popUpCtrl', ['$scope', '$ionicPopup', popUpCtrl]);

function popUpCtrl($scope, $ionicPopup) {
	'use strict';

	// A confirm dialog box to get the GPS location.
	$scope.showConfirm = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Polling Booth location',
			template: 'Are you at the polling booth where the votes were counted?',
			cancelText: 'No',
			cancelType: 'button-dark',
			okText: 'Yes',
			okType: 'button-balanced'
		});
		confirmPopup.then(function(res) {
			if(res) {
				console.log('Yes');
			} else {
				$ionicPopup.alert({
					title: 'Polling booth location',
					template: 'You have to be at the polling booth to submit the results. This is to ensure accurate result collection.'
				});
			}
		});
	};
}

/**
* popUpCtrl
*
*
* Controller for creating pop-ups to allow user confirm their GPS location.
*/

angular.module('grassroots').controller('popUpCtrl', ['$scope', 'sweet', popUpCtrl]);

function popUpCtrl($scope, sweet) {
	'use strict';

	// A confirm dialog box to get the GPS location.
	$scope.showConfirm = function() {
		sweet.show({
			title: 'Polling Booth location',
			text: 'Are you at the polling booth where the votes were counted?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
			closeOnConfirm: false,
			closeOnCancel: false },

			function(isConfirm) {
				if(isConfirm) {
					sweet.show('Polling Booth location', 'Thank you, Please go ahead and submit the collated results.', 'success');
					sweet.show({
				        title: 'Confirm',
					        text: 'Delete this file?',
					        type: 'warning',
					        showCancelButton: true
					    }, function(isOk) {
					        if (isOk) {
					            alert('OK is clicked');
					        } else {
					            alert('Cancel is clicked');
					        }
					    });
				} else {
					sweet.show('Requirement!', 'You have to be at the polling booth to submit the results. This is to ensure accurate result collection.', 'error');
				}
			});
		};
	}

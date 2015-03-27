/**
* collationCtrl
*
* Provides all the list of parties in Nigeria along with their logos obtained from an hardcoded json service.
*/

angular.module('grassroots').controller('collationCtrl', ['inecSrv', '$scope', '$cordovaKeyboard', collationCtrl]);

function collationCtrl(inecSrv, $scope, $cordovaKeyboard) {
	'use strict';

	var partyAbbr = inecSrv.getParties();

	$scope.partyAbbr = partyAbbr;
}

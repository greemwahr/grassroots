/**
* resultCollationCtrl
*
* Description
*/

angular.module('grassroots').controller('resultCollationCtrl', ['inecSrv', '$scope', resultCollationCtrl]);

function resultCollationCtrl(inecSrv, $scope) {
	'use strict';

	var partyAbbr = inecSrv.getParties();

	$scope.partyAbbr = partyAbbr;
}

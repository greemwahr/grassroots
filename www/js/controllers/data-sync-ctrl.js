/**
* dataSyncCtrl
*
*
* This controller provides three way data binding for the results pages.
*/

angular.module('grassroots').controller('dataSyncCtrl', ['$scope', 'fireBaseSrv', dataSyncCtrl]);

function dataSyncCtrl($scope, fireBaseSrv) {
    'use strict';

    $scope.partyAbbr = fireBaseSrv.presidentialResults();

    $scope.presidentialResult = function() {
        $scope.partyAbbr.$save().then(function() {
            alert('Profile saved to Firebase!');
        }).catch(function(error) {
            alert('Error!');
        });
    };
}

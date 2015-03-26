/**
 * modalPageCtrl
 *
 * This controls all modal screens for making choices in the app.
 */

angular.module('grassroots').controller('modalPageCtrl', ['$scope', '$ionicModal', modalPageCtrl]);

function modalPageCtrl($scope, $ionicModal) {
    'use strict';

    var modalTemplates = {
        'skipPage': 'views/skip-page.html',
        'terms': 'views/tandc-page.html'
    };

    $scope.openModal = function (pageName) {
        var templateUrl = modalTemplates[pageName];

        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it.
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    //Execute action on hide modal.
    $scope.$on('modal.hidden', function () {
        //Execute action
    });

    //Execute action on remove modal
    $scope.$on('modal.removed', function () {
        //Execute action
    });
}

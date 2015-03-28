/**
 * loaderSrv
 *
 *
 *
 * This is an event controller that creates a spinner to show the user that an event is happening and should be patient.
 */

angular.module('grassroots').factory('loaderSrv', ['$rootScope', '$ionicLoading', loaderSrv]);

function loaderSrv($rootScope, $ionicLoading) {
    'use strict';

    return {
        show: function() {

            $rootScope.loading = $ionicLoading.show({
                template: '<ion-spinner icon="bubbles" class="spinner-tabinactive"></ion-spinner>',
                noBackdrop: true,
                delay: 100
            });
        },

        hide: function() {
            $ionicLoading.hide();
        }
    };
}

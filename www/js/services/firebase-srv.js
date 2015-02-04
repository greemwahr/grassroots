/**
* Firebase Service Provider
*
* This script provides the configuration and code for tying to the Firebase BaaS.
*/

angular.module('grassroots').factory('fireBaseSrv', ['$firebase', fireBaseSrv]);

function fireBaseSrv($firebase){
	'use strict';

	var ref = new Firebase("https://sweltering-torch-3548.firebaseio.com");

	// return {
	// 	ref: function () {
	// 		return ref;
	// 	}
	// };

	return ref;
}

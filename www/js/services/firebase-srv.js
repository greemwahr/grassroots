/**
* Firebase Service Provider
*
* This script provides the configuration and code for tying to the Firebase BaaS.
*/

angular.module('grassroots').factory('fireBaseSrv', ['$firebase', fireBaseSrv]);

function fireBaseSrv($firebase, $firebaseObject){
	'use strict';

		var ref = new Firebase("https://sweltering-torch-3548.firebaseio.com");

		return ref;

		// function electionResults() {
		// 	var resultObj  = {
		// 		'presidential' : ref.child('election/result/presidential'),
		// 		'senatorial': ref.child('election/result/senatorial'),
		// 		'natleg': ref.child('election/result/natleg'),
		// 		'gubernatorial' : ref.child('election/result/gubernatorial'),
		// 		'stateleg': ref.child('election/result/stateleg')
		// 	};
		//
		// 	return $firebaseObject(resultObj);
		// }

		function presidentialResults() {
			var presResl = ref.child('election/result/presidential');

			return $firebaseObject(presResl);
		}
}

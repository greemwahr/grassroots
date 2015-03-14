/**
* socialShareCtrl
*
* The controller allows for social sharing capabilities in the app using a social shariing apache plugin.
* url: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
*/

angular.module('grassroots').controller('socialShareCtrl', ['$scope', '$cordovaSocialSharing', socialShareCtrl]);

function socialShareCtrl($scope, $cordovaSocialSharing) {
	'use strict';

	$scope.shareAnywhere = function() {
		$cordovaSocialSharing.share("Grassroots, a crowdsourced app for election monitoring", "Grassroots mobile app", null, "http://getcounted.org");
	};

	$scope.shareViaFacebook = function(message, pollbooth) {
		$cordovaSocialSharing.canShareVia("facebook", message, pollbooth).then(function(result) {
			$cordovaSocialSharing.shareViaFacebook(message, pollbooth);
		}, function(error) {
			alert("Cannot share on Facebook");
		});
	};
}

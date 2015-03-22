/* popUpCtrl
 *
 *
 * Controller for creating pop-ups to allow user confirm their GPS location.
 */

angular.module('grassroots').controller('popUpCtrl', ['$scope', 'sweet', '$location', '$rootScope', 'ResultsService', '$cordovaGeolocation', popUpCtrl]);

function popUpCtrl($scope, sweet, $location, $rootScope, ResultsService, $cordovaGeolocation) {
    'use strict';

    // A confirm dialog box to get the GPS location.
    $scope.showConfirm = function () {
        sweet.show({
                title: 'Polling Booth location',
                text: 'Are you at the polling booth where the votes were counted?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                closeOnConfirm: false,
                closeOnCancel: false
            },

            function (isConfirm) {
                if (isConfirm) {
                    // sweet.show('Polling Booth location', 'Thank you, Please go ahead and submit the collated results.', 'success');

                    sweet.show({
                        title: 'Polling Booth location',
                        text: 'Thank you, Please go ahead and submit the collated results.',
                        type: 'success',
                        showCancelButton: true
                    }, function (isOk) {
                        if (isOk) {
                            // Tab Name
                            var path = $location.$$path;
                            var tabName = path.split('/')[2];

                            // Slide Name
                            var slideName = $rootScope.data.currentViewTitle;
                            slideName = slideName.replace(" ", "-");
                            slideName = slideName.toLowerCase();

                            // Processing Results to Store in Firebase
                            var completeResults = processResultsArray($scope.partyAbbr, slideName);


                            //UID
                            var uid = $rootScope.loggedInUserID;
                            console.log(uid);

                            //Fetching the GeoLocation Data
                            var posOptions = {
                                timeout: 10000,
                                maximumAge: 20000,
                                enableHighAccuracy: true
                            };

                            $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                                // navigator.geolocation.getCurrentPosition(function (position) {
                                var lat = position.coords.latitude;
                                var long = position.coords.longitude;
                                alert("Lat is :" + lat + " & Long is :" + long);

                                var geoPosition = {
                                    lattitude: lat,
                                    longitude: long
                                };
                                // Call my SubmitResults Service
                                ResultsService.submitResults(tabName, slideName, uid, completeResults, geoPosition, function (status) {
                                    if (status) {
                                        console.log("Data Submission Successful");
                                        resetResults($scope.partyAbbr, slideName);
                                    } else {
                                        alert("Error Occurred");
                                    }

                                });

                            }, function (err) {
                                console.log("Error " + err);
                            });


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


    function processResultsArray(partyAbbr, slideName) {
        // console.log(partyAbbr);
        var dataArr = [];
        for (var i = 0; i < partyAbbr.length; i++) {

            dataArr.push({
                fullname: partyAbbr[i].fullname,
                abbr: partyAbbr[i].abbr,
                results: partyAbbr[i].results ? partyAbbr[i].results[slideName] ? partyAbbr[i].results[slideName] : "" : ""
            });
        }
        // console.log(dataArr);
        return dataArr;
    }

    function resetResults(partyAbbr, slideName) {
        for (var i = 0; i < partyAbbr.length; i++) {
            if (partyAbbr[i].results && partyAbbr[i].results[slideName]) {
                partyAbbr[i].results[slideName] = "";
            }
        }
    }
}
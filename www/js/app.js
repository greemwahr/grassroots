// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('grassroots', ['ionic', 'ngCordova', 'firebase', 'ezfb', 'hSweetAlert'])

.run(function ($ionicPlatform, $cordovaToast, $rootScope, Auth) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        if (window.Connection) {
            if (navigator.connection.type == Connection.NONE) {
                $cordovaToast.show('Can\'t connect to network. Please re-try', 'long', 'bottom').then(function (success) {
                    console.log("The toast was shown");
                }, function (error) {
                    console.log("The toast was not shown due to " + error);
                });
                // alert("no internet connection");
            }
        }
        if (typeof analytics !== "undefined") {
            analytics.startTrackerWithId("UA-60475110-1");
        } else {
            console.log("Google Analytics Unavailable");
        }

        $rootScope.loggedInUserID = "";
        var authData = Auth.$getAuth();
        //console.log(authData);
        if (authData) {
            $rootScope.loggedInUserID = authData.uid;

        } else {
            console.log("Logged out");
            //$location.path('/login');
        }

    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    .state('launchpage', {
        url: "/launchpage",
        templateUrl: "views/launch-page.html",
        controller: "launchPageCtrl"
        // resolve: {
        //     // controller will not be loaded until $requireAuth resolves
        //     // Auth refers to our $firebaseAuth wrapper in the example above
        //     "currentAuth": ["Auth",
        //             function (Auth) {
        //             // $requireAuth returns a promise so the resolve waits for it to complete
        //             // If the promise is rejected, it will throw a $stateChangeError (see above)
        //             return Auth.$requireAuth();
        //   }]
        // }
    })

    .state('tandc', {
        url: "/terms&conditions",
        templateUrl: "views/tandc-page.html",
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth",
                    function (Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return Auth.$requireAuth();
          }]
        }
    })

    .state('observer', {
        abstract: true,
        url: "/observer",
        templateUrl: "views/observer-menu-page.html",
        controller: "menuLinkCtrl",
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth",
                    function (Auth) {
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return Auth.$requireAuth();
          }]
        }
    })

    .state('observer.national', {
        url: "/national",
        views: {
            'national': {
                templateUrl: "views/national-results-page.html"
            }
        }
    })

    .state('observer.regional', {
        url: "/regional",
        views: {
            'regional': {
                templateUrl: "views/regional-results-page.html"
            }
        }
    })

    .state('observer.record', {
        url: "/record",
        views: {
            'record': {
                templateUrl: "views/recorded-results-page.html",
                controller: "recordPageCtrl"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/launchpage');

})

.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.templates.maxPrefetch(6);
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
})

.config(function ($cordovaInAppBrowserProvider) {
    var defaultOptions = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
    };

    document.addEventListener('deviceready', function () {
        $cordovaInAppBrowserProvider.setDefaultOptions(defaultOptions);
    }, false);
})

.config(function (ezfbProvider) {
    var myInitFunction = function ($window, $rootScope, ezfbInitParams) {
        $window.FB.init({
            appId: '809400072436533',
            version: 'v2.1'
        });

        $rootScope.$broadcast('FB.init');
    };

    ezfbProvider.setInitFunction(myInitFunction);
});

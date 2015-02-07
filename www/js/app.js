// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('grassroots', ['ionic', 'ngCordova', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('launchpage', {
      url: "/launchpage",
      templateUrl: "views/launch-page.html",
      controller: "launchPageCtrl"
    })
    
    // .state('skippage', {
    //   url: "/skippage",
    //   templateUrl: "views/skip-page.html"
    // })
    
    // .state('login', {
    //   url: "/login",
    //   templateUrl: "views/social-login-page.html"
    // })
    
    .state('observer', {
      abstract: true,
      url: "/observer",
      templateUrl: "views/observer-menu-page.html"
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
    });

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/launchpage');
  

});
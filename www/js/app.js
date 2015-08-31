// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ECIAccess', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'views/tabs.html'
    })
    .state('tabs.alerts', {
      url: '/alerts',
      views: {
        'alerts-tab': {
          controller: 'AlertsController',
          templateUrl: 'views/alerts.html'
        }
      }
    })
    .state('tabs.tickets', {
      url: '/tickets',
      views: {
        'tickets-tab': {
          controller: 'TicketsController',
          templateUrl: 'views/tickets.html'
        }
      }
    })
    .state('tabs.contacts', {
      url: '/contacts',
      views: {
        'contacts-tab': {
          controller: 'ContactsController',
          templateUrl: 'views/contacts.html'
        }
      }
    })
    .state('tabs.health', {
      url: '/health',
      views: {
        'health-tab': {
          controller: 'HealthController',
          templateUrl: 'views/health.html'
        }
      }
    })
    .state('tabs.preferences', {
      url: '/preferences',
      views: {
        'preferences-tab': {
          controller: 'PreferencesController',
          templateUrl: 'views/preferences.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
})

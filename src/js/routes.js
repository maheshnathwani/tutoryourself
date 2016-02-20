'use strict';

angular.module('tutoryourself')
  .config(
    ['$stateProvider', '$urlRouterProvider','$mdThemingProvider','snSkrollrProvider',
      function($stateProvider, $urlRouterProvider, $mdThemingProvider, snSkrollrProvider) {

        $urlRouterProvider
          .otherwise('/home');

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          });

        $mdThemingProvider.theme('default')
        .primaryPalette('red', {
          'default': '500', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '700', // use shade 700 for the <code>md-hue-1</code> class
          'hue-2': '900', // use shade 900 for the <code>md-hue-2</code> class
          'hue-3': '100' // use shade 100 for the <code>md-hue-3</code> class
        })
        .accentPalette('orange', {
          'default': '600'
        })
        .backgroundPalette('grey',{
          'default': '100',
          'hue-1': '50'
        });

          snSkrollrProvider.config = {
              smoothScrolling : true
          }
      }
    ]);

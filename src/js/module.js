'use strict';

angular.module('tutoryourself', [
  'ngMaterial',
  'ui.router',
  'ngSanitize',
    'angularYouTube',
    'angular-scroll-animate',
    'sn.skrollr'
]);
angular
    .module('tutoryourself')
    .directive("mnScroll", ['$window',function ($window) {
      return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
          console.log(this.pageYOffset);

          scope.$apply();
        });
      };
    }]).run(['snSkrollr', function(snSkrollr){snSkrollr.init();}]);

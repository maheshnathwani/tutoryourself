"use strict";

angular.module('angularYouTube').factory('youtubeApiLoader', ['$q', '$window', function($q, $window) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var loaded = false;
  var defer = $q.defer();

  $window.onYouTubeIframeAPIReady = function() {
    defer.resolve();
  };

  return {
    ready: defer.promise
  };
}]);
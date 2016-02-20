angular.module('angularYouTube').directive('youtubeVideo', ['$window', 'youtubeApiLoader', function($window, youtubeApiLoader) {
  return {
    restrict: "E",

    scope: {
      stateChange: "&",
      playerReady: "&",
      playbackQualityChange: "&",
      playbackRateChange: "&",
      error: "&",
      apiChange: "&",
      videoId: "@", // required
      width: "@",
      height: "@",
      autoHide: "@",
      autoPlay: "@",
      ccLoadPolicy: "@",
      color: "@",
      controls: "@",
      disableKb: "@",
      enableJsApi: "@",
      end: "@",
      fs: "@",
      hl: "@",
      ivLoadPolicy: "@",
      list: "@",
      listType: "@",
      loop: "@",
      modestBranding: "@",
      origin: "@",
      playerApiId: "@",
      playlist: "@",
      playsInline: "@",
      rel: "@",
      showInfo: "@",
      start: "@",
      theme: "@",
    },

    template: '<div></div>',

    link: function(scope, element, attrs) {

      youtubeApiLoader.ready.then(function() {
        scope.player = new YT.Player(element.children()[0], {
          playerVars: {
            autohide: scope.autoHide,
            autoplay: scope.autoPlay,
            cc_load_policy: scope.ccLoadPolicy,
            color: scope.color,
            controls: scope.controls,
            disablekb: scope.disableKb,
            enablejsapi: scope.enableJsApi,
            end: scope.end,
            fs: scope.fs,
            hl: scope.hl,
            iv_load_policy: scope.ivLoadPolicy,
            list: scope.list,
            listType: scope.listType,
            loop: scope.loop,
            modestbranding: scope.modestBranding,
            origin: scope.origin,
            playerapiid: scope.playerApiId,
            playlist: scope.playlist,
            playsinline: scope.playsInline,
            rel: scope.rel,
            showinfo: scope.showInfo,
            start: scope.start,
            theme: scope.theme
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoId,
          events: {
            'onReady': function(event) {
              scope.playerReady({
                event: event
              });
            },
            'onStateChange': function(event) {
              scope.stateChange({
                event: event
              });
            },
            'onPlaybackQualityChange': function(event) {
              scope.playbackQualityChange({
                event: event
              });
            },
            'onPlaybackRateChange': function(event) {
              scope.playbackRateChange({
                event: event
              });
            },
            'onError': function(event) {
              scope.error({
                event: event
              });
            },
            'onApiChange': function(event) {
              scope.apiChange({
                event: event
              });
            }
          }
        });
      });
    }
  };
}]);
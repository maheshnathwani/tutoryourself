angular.module('angularYouTube').controller('EventsController', function($scope) {
  $scope.playerReady = function(event) {
    $scope.player = event.target;
  };

  $scope.stateChange = function(event) {
    $scope.$apply(function() {
      if (event.data === YT.PlayerState.ENDED)
        $scope.state = "ENDED";
      else if (event.data === YT.PlayerState.PLAYING)
        $scope.state = "PLAYING";
      else if (event.data === YT.PlayerState.PAUSED)
        $scope.state = "PAUSED";
      else if (event.data === YT.PlayerState.BUFFERING)
        $scope.state = "BUFFERING";
      else if (event.data === YT.PlayerState.CUED)
        $scope.state = "CUED";
    });
  };

  $scope.playbackQualityChange = function(event) {
    $scope.$apply(function() {
      $scope.quality = event.data;
    });
  };
});
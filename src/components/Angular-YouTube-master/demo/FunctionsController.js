angular.module('angularYouTube').controller('FunctionsController', function($scope) {
  $scope.playerReady = function(event) {
    $scope.player = event.target;
  };

  $scope.play = function() {
    $scope.player.playVideo();
  };

  $scope.pause = function() {
    $scope.player.pauseVideo();
  };

  $scope.stop = function() {
    $scope.player.stopVideo();
  };

  $scope.mute = function() {
    $scope.player.mute();
  };

  $scope.unMute = function() {
    $scope.player.unMute();
  };
});
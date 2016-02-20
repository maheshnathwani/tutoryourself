# Angular YouTube Plugin

This plugin was inspired by [an excellent article by Phil Oxrud][oxrud] (including [one of the comments][oxrud-comment]).

I have extended his example to provide complete access to all [YouTube IFrame API][api] parameters, functions and events.

To use this plugin correctly, it is highly recommended that you look at both the code, and the [YouTube IFrame API][api] pages.

For a demo of usage, see [this Plunk][plunk].

Simplest Usage
----
The only attribute which is required is `video-id`.
```HTML
<youtube-video video-id="LM1OL7qQib4"></youtube-video>
```

Other Attributes
----
All other parameters supported by the API can also be set.

There are many.

Here, we are setting the `width`, `height`, `showInfo` and `start` parameters.
```HTML
<youtube-video video-id="LM1OL7qQib4" width="320" height="240" show-info="0" start="6"></youtube-video>
```

Player Functions
----
To call functions exposed by the API, we need access to our instance of `YT.Player`.

To get this object, we subscribe to the `playerReady` event, and capture the `target` property of the `event` parameter.
```HTML
<youtube-video video-id="LM1OL7qQib4" player-ready="playerReady(event)"></youtube-video>
```
```javascript
  // ...in our controller
  $scope.playerReady = function(event) {
    $scope.player = event.target;
  };
```
We can then call any function defined by the API on this object. See the [demo][plunk] for a few examples.

Events
----
There are 6 events exposed by the api. These can be subscribed to by assigning functions to their corresponding attributes.

Here, in addition to the `playerReady` event, we subscribe to the `stateChange` and `playbackQualityChange` events.
```HTML
<youtube-video video-id="LM1OL7qQib4" player-ready="playerReady(event)" state-change="stateChange(event)" playback-quality-change="playbackQualityChange(event)"></youtube-video>
```
```javascript
  // ...in our controller
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
  ```

License
----

MIT


[//]: # 
   [oxrud]: <http://blog.oxrud.com/posts/creating-youtube-directive/>
   [api]: <https://developers.google.com/youtube/iframe_api_reference>
   [plunk]: <https://plnkr.co/wAuYl5>
   [oxrud-comment]: <http://blog.oxrud.com/posts/creating-youtube-directive/#comment-1512843269>


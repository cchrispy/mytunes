// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  // the model for player view is this.model.get('currentSong'), where 'this.model', is AppModel
  // the model for player view is AppModel.get('currentSong'), which is new SongModel();
  // the model for player view is new SongModel()



  initialize: function() {
    // listen for the 'ended' event from SongQueue, and invoke playFirst()
    var context = this; // player view

    this.$el.on('ended', function() {
      context.model.dequeue();
    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(model) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(model) {
      this.remove(this.at(0));
    });
    this.on('remove', function(model, collection, options) {
      if (this.length) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(model) {
      this.remove(model);
    });
    this.on('removeTrack', function(model) {
      this.remove(model);
    });
  },
  playFirst: function() {
    this.at(0).play();
  },

});
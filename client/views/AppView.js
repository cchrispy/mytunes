// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({


  // AppView's model is AppModel

  attributes: {
    id: 'AppView'
  },
  
  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')}); // Player View model: new SongModel() at first
    this.libraryView = new LibraryView({collection: this.model.get('library')}); // library is Songs

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
    ]);
  }

});

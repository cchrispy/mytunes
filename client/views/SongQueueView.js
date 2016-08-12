// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  tagName: 'table',
  attributes: {
    id: 'SongQueue'
  },


  render: function() {
    this.$el.html('<th>Queued Songs</th>');


    this.collection.forEach(function(song) {
      var view = new SongQueueEntryView({model: song});
      this.$el.append(view.render());
    }.bind(this));
    return this.$el;
  }

});
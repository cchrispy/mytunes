// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  // model is SongModel
  initialize: function() {
  },

  tagName: 'tr',

  attributes: {
    class: 'queueSong'
  },

  template: _.template('<td class="artist"><%= artist %></td><td><%= title %></td>'),

  events: {
    click: function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    this.fetch(); // Fetch will invoke parse()
    // this.request();
  },
  parse: function(response) {
    return response.results;
  },
  // request: function() {
  //   var context = this;
  //   $.ajax({
  //     url: this.url,
  //     type: 'GET',
  //     success: function(data) {
  //       data.results.forEach(function(item) {
  //         var song = new SongModel(item);
  //         context.add(song);
  //       });
  //     },
  //     error: function(error) {
  //       console.log('error with request');
  //     }
  //   });
  // },

});
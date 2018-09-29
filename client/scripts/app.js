var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  rooms: [],

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      $('#chats').empty();
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
          if ($('#roomlist').val() === data.results[i].roomname) {
            MessagesView.renderMessage(data.results[i]);
          }
          if (!this.rooms.includes(data.results[i].roomname)) {
            RoomsView.renderRoom(Messages.escapeHTML(data.results[i].roomname));
            this.rooms.push(data.results[i].roomname);
          }
        }
      }
      console.log(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

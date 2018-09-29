var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: [],

  initialize: function() {
    // this.renderRoom('Lobby');
    Rooms.add();
    this.filterRoom();
  },

  render: function(messages) {
    for (var i = 0; i < messages.length; i++) {
      if (!RoomsView.rooms.includes(messages[i].roomname)) {
        RoomsView.renderRoom(messages[i].roomname);
        RoomsView.rooms.push(messages[i].roomname);
      }
    }
  },

  renderRoom: function(roomname) {
    var $room = $(`<option>${roomname}</option>`);
    $('#rooms select').append($room);
    $('select').css({'width': 100});
  },

  filterRoom: function() {
    $('#roomlist').change(function() {
      App.fetch();
    });
  }

};

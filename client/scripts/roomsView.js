var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // this.renderRoom('Lobby');
    Rooms.add();
  },

  renderRoom: function(roomname) {
    var $room = $(`<option>${roomname}</option>`);
    $('#rooms select').append($room);
  }

};

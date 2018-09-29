var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // this.renderRoom('Lobby');
    Rooms.add();
    this.filterRoom();
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

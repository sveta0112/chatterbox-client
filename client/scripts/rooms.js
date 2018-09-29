var Rooms = {

  add: function() {
    $("#addRoom").on("click", function() {
      var roomname = prompt('Please enter a new Roomname');
      if (roomname) {
        RoomsView.renderRoom(roomname);
      }
    });
  }

};
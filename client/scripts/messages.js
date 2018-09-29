var Messages = {
 
  Message: function(username, text, roomname) {
    this.username = username,
    this.text = text,
    this.roomname = roomname;
  },

  createMessage: function(username, text, roomname) {
    message = this.Message(username, text, roomname);
    Parse.create(message);
  },

};
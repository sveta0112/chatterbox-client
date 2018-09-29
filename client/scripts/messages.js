var Messages = {

  Message: function(username, text, roomname) {
    this.username = username,
    this.text = text,
    this.roomname = roomname;
  },

  createMessage: function(username, text, roomname) {
    message = new this.Message(username, text, roomname);
    Parse.create(message);
  },

  escapeHTML: function(unsafeStr) {
    return unsafeStr
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;')
      .replace(/\//g, '&#x2F;');
  }

};

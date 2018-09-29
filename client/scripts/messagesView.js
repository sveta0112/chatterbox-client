var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Friends.onClickFriend();
  },

  render: function(messages) {
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].username && messages[i].text && messages[i].roomname) {
        if ($('#roomlist').val() === messages[i].roomname) {
          MessagesView.renderMessage(messages[i]);
        }
      }
    }
  },

  renderMessage: function(message) {
    var $mess = $(MessageView.render(message));
    $(chats).append($mess);
  }

};
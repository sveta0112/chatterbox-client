var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Friends.onClickFriend();
  },

  renderMessage: function(message) {
    var $mess = $(MessageView.render(message));
    $(chats).append($mess);
  }

};
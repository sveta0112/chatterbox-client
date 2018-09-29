var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    var $mess = $(MessageView.render(message));
    $(chats).append($mess);
    var $user = $('.username');
    $user.on('click', Friends.toggleStatus());
  }

};
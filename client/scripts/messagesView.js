var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var $user = $('.username');
    $user.on('click', Friends.toggleStatus());

  },

  renderMessage: function(message) {
    var $mess = $(MessageView.render(message));
    $(chats).append($mess);
  }

};
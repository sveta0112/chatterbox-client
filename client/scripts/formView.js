var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    this.refresh();
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Messages.createMessage(App.username, $('#message').val(), $('#roomlist').val());
    $('#message').val('');
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  refresh: function() {
    $('#refresh').on('click', function() {
      App.fetch();
    });
  }

};

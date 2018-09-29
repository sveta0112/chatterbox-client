var Friends = {
  
  friends: {},

  toggleStatus: function(friendname) {
    if (!this.friends[friendname]) {
      this.friends[friendname] = true;
    } else {
      this.friends[friendname] = false;
    }
  },

  onClickFriend: function() {
    $(document).on('click', '.username', function() {
      var $username = $(this).text().trim();
      Friends.toggleStatus($username);
      if (Friends.friends[$username] === true) {
        $('.' + $username).css('background-color', '#FFFF00');
      } else {
        $('.' + $username).css('background-color', '#eee');
      }
    });
  }
  
  
};

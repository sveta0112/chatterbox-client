var Friends = {
  
  friends: {},

  toggleStatus: function(friendname) {
    console.log('hello');
    if (!this.friends[friendname]) {
      this.friends[friendname] = true;
    } else {
      this.friends[friendname] = false;
    }
  }
  
  
};

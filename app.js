const Store = {
  users: []
}

$(function() { // on document ready
  userController = new UserController()
  userController.init()
  //initialize all controllers here
})

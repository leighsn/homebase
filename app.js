const Store = {
  users: [],
  jambaseEvents: []
}

$(function() { // on document ready
  userController = new UserController()
  userController.init()
})

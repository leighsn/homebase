const Store = {
  users: [],
  nytimesArticles: [] 
  // jambaseEvents: []
}

$(function() { // on document ready
  userController = new UserController()
  userController.init()
})

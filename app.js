const Store = {
  users: [],
  jamebaseEvents: []
}

$(function() { // on document ready
  userController = new UserController()
  userController.init()
  //initialize all controllers here
})





    // $('#even-feed').empty()
    // $('#even-feed').append(response.events)

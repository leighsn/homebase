class UserController {
    init() {
      this.userSubmitListener()
      console.log('UserController.init() being called')
    }

    userSubmitListener() {
      $('#user-form-submit').on('click', function(event) {
        //on submit -------
        event.preventDefault()
        console.log('User Submit Working')
        //create new user
        UserController.prototype.createUser()

        //create a new instance of a jambaseEventController
        var jambaseEventController = new JamBaseEventController();
        jambaseEventController.init()

      })
      }

     createUser() {
      let name = $('#username').val()
      let zip = $('#user-zipcode').val()
      var newUser = new User(name, zip)
      if (Store.users.length > 0) {
        console.log('Created new User')
      }
    }
}

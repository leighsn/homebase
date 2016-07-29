class UserController {
    init() {
      this.userSubmitListener()
    }

    userSubmitListener() {
      $('#user-form-submit').on('click', function(event) {
        event.preventDefault()
        console.log('User Submit Working')
        //create new user
      })
      }
}

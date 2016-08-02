class UserController {
  constructor(name, zip) {
    this.userName = name
    this.userZip = zip
  }

  init() {
    console.log('UserController.init() being called')
    this.checkExistingUsers()

  }

  // UserController.prototype.createUser()


  usersPresent(){
    return Store.users.length != 0
    //If Store.users is not 0, returns true
  }

  checkExistingUsers(){
    var users = Store.users
    var name = this.userName
    if (Store.users.length != 0) {
      $(users).each(function(){
        var searchName = name.toLowerCase()
        var thisName = this.name.toLowerCase()
        if (searchName == thisName) {
          alert('Existing user found')
        }
      })
      this.createNewUser()
    } else {
      this.createNewUser()
    }
  }

  //Why the hell isn't this function working?
  checkUserStore(users){
    $(users).each(function(){
      var searchName = name.toLowerCase()
      var thisName = this.name.toLowerCase()
      if (searchName == thisName) {
        console.log('Existing user found')
      }
    })
  }

  createNewUser() {
    new User(this.userName, this.userZip)
    var jambaseEventController = new JamBaseEventController();
    var restaurantListController = new RestaurantListController();
    //ny times new here
    var nytController = new nytimesController();
    console.log('Created new User')

    this.changeHomePage()

    //I want to break these out
    jambaseEventController.init()
    restaurantListController.init(this.userZip)
    //ny times init here
    nytController.init()
  }

  changeHomePage() {
    $("#logged_in").html('<a href="#">Welcome,' + this.userName + '!</a>').toggle()
    $("#user_div, #login_form").toggle()
  }

  // initializeUserPreference(){
  // var jambaseEventController = JamBaseEventController();
  // var restaurantListController = RestaurantListController();

  // jambaseEventController.init()
  // restaurantListController.init()

  // }

}

const User = (function(){
  var counter = 0;

   return class {
     constructor(name, location) {
      this.id = counter++
      this.name = name
      this.location = location
      console.log('user created')
      Store.users.push(this)
    }
  }
}())

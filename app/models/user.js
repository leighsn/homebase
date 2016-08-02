const User = (function(){
  var counter = 0;

   return class {
     constructor(name, zipcode) {
      this.id = counter++
      this.name = name
      this.zipcode = zipcode  //city form
      console.log('user created')
      Store.users.push(this)
    }
  }
}())

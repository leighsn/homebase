const RestaurantList = (function(){
  var counter = 1;

  return class {
    constructor(restaurantName, restaurantAddress, restaurantCity, restaurantState, restaurantZip, restaurantLink, restaurantImage) {
      
      this.id = counter++
      this.restaurantName = restaurantName
      this.restaurantAddress = restaurantAddress
      this.restaurantCity= restaurantCity
      this.restaurantState = restaurantState
      this.restaurantZip = restaurantZip
      this.restaurantLink = restaurantLink
      this.restaurantImage = restaurantImage

      // Store.restaurantList.push(this)
      console.log('Created new restaurantList object')
    }
  }
}())



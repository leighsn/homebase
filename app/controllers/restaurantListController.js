class RestaurantListController {

  init(zip) {
    console.log('restaurantListController.init() is being reached')
    this.restaurantLocationAdapter(zip)
  }

  restaurantLocationAdapter(zip){
    $.ajax({
      method: "GET",
      url: `http://opentable.herokuapp.com/api/restaurants?zip=${zip}`,
    }).done(function(data){
      $("#restaurant_feed").empty();
      $("#user-form input[type='text']").val("");
      if (data.restaurants.length > 0) {
        data.restaurants.forEach(function(element){
          var restaurantName = element.name,
            restaurantAddress = element.address,
            restaurantCity = element.city,
            restaurantState = element.state,
            restaurantZip = element.postal_code,
            restaurantLink = element.reserve_url,
            restaurantImage = element.image_url
          var restaurantList = new RestaurantList(restaurantName, restaurantAddress, restaurantCity, restaurantState, restaurantZip, restaurantLink, restaurantImage)
          $('#restaurant_feed').append('<li><div class="panel panel-default"><a href=' + restaurantLink + ' target="_blank"><div class="thumb" style="background: url('+ element.image_url +') center center no-repeat; background-size: cover;"></div><div class="panel-heading"><h3 class="panel-title">'+ element.name +'</h3></div></a><div class="panel-body"><span>'+ element.address +'</span><br/><span>'+ element.city +', '+ element.state +'</span></div></div></li>');
        })
      }
    })
  }
}

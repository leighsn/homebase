$(function(){
  $.ajax({
    method: "GET",
    url: "http://opentable.herokuapp.com/api/restaurants?country=US",

  }).done(function(data){
    data.restaurants.forEach(function(element){

    var name = element.name,
        address = element.address,
        city = element.city,
        state = element.state,
        imageUrl = element.image_url

      $('#restaurant_feed').append('<li><div class="thumb" style="background: url('+ element.image_url +') center center no-repeat; background-size: cover;"></div><h3>'+ element.name +'</h3><span>'+ element.addresss +'</span><span>'+ element.city +', '+ element.state +'</span></li>');
    })
  })
})


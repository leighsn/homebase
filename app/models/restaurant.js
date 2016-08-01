$(function(){
  $.ajax({
    method: "GET",
    url: "http://opentable.herokuapp.com/api/restaurants?country=US",

  }).done(function(data){
    if (data.restaurants.length > 0) {
      data.restaurants.forEach(function(element){

        var name = element.name,
        address = element.address,
        city = element.city,
        state = element.state,
        imageUrl = element.image_url

        $('#restaurant_feed').append('<li><div class="thumb" style="background: url('+ element.image_url +') center center no-repeat; background-size: cover;"></div><h3>'+ element.name +'</h3><span>'+ element.address +'</span><br/><span>'+ element.city +', '+ element.state +'</span></li>');

      })
    }
  })

  $("#user-form-submit").on("click", function(event){
    var zipCode = $("#user-zipcode").val()
    $("#restaurant_feed").empty();
    $("#user-form input").empty();
    event.preventDefault()
  
    $.ajax({
      method: "GET",
      url: `http://opentable.herokuapp.com/api/restaurants?zip=${zipCode}`,
    }).done(function(data){
        if (data.restaurants.length > 0) {
          data.restaurants.forEach(function(element){
              alert("ASfs")
          $('#restaurant_feed').append('<li><div class="thumb" style="background: url('+ element.image_url +') center center no-repeat; background-size: cover;"></div><h3>'+ element.name +'</h3><span>'+ element.address +'</span><br/><span>'+ element.city +', '+ element.state +'</span></li>');
        }) 
      }
    })
  })
})

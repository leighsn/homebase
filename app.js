const Store = {
  users: [],
  nytimesArticles: [],
  jambaseEvents: [],
  restaurantList: []
}

$(function() { // on document ready
  textController = new twilioSendTextController()
  textController.init()
  defaultPage()

  $('#log_out_link').click(defaultPage(), function(){
    $(".login-overlay").fadeIn()
    $("#user_div").toggle()
  })

  $('#user-form-submit').on('click', function(event) {
    var name = $('#username').val()
    var zip = $('#user-zipcode').val()
    event.preventDefault()
    $('.login-overlay').fadeOut()

    var userController = new UserController(name, zip)
    userController.init()

  })

  //populate default list of restaurants (set to US)

  function defaultPage() {
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
          link = element.reserve_url,
          imageUrl = element.image_url

          $('#restaurant_feed').append('<li><div class="panel panel-default"><a href=' + link + ' target="_blank"><div class="thumb" style="background: url('+ element.image_url +') center center no-repeat; background-size: cover;"></div><div class="panel-heading"><h3 class="panel-title">'+ element.name +'</h3></div></a><div class="panel-body"><span>'+ element.address +'</span><br/><span>'+ element.city +', '+ element.state +'</span></div></div></li>');
        })
      }
    })
  }
})

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

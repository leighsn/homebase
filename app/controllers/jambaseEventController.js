class JamBaseEventController {

  init() {
    console.log('JamBaseController.init() is being reached')
    this.jambaseEventAdapter()
  }


  // feedBuilder() {
  //   console.log('feedBuilder is being called')
  //   for (var i = 0; i < 15; i++) {
  //     Store.jambaseEvents[i].build()
  //   }
  // }

  renderEvents() {
    var source = $('#event-feed-template').html()
    var template = Handlebars.compile(source)
    var context = { jambaseEvents: Store.jambaseEvents }
    var result = template(context)
    //$('#event-feed').empty()
    $('#event-feed').append(result)
    }

  jambaseEventAdapter(){
    //variables for ajax call
    var userZip = Store.users[0].zipcode
    var urlString = `http://api.jambase.com/events?zipCode=${userZip}&radius=25&page=0&api_key=m4mdrr2uhpnkydjcxgp3a5bp`
      console.log(urlString)

    // make ajax call & parse results
    $.ajax({
      method: "GET",
      url: urlString
    }).done(function(response) {
      if (response.Events.length > 0) {
      JamBaseEventController.prototype.jamebaseEventFactory(response.Events)
      JamBaseEventController.prototype.renderEvents()
    } else {
      alert('Invalid Search')
    }
    }) // callback function within .done
  } //jambaseEventAdapter close


  jamebaseEventFactory(responseEvents) {
    if (responseEvents.length > 0) {
      for (var i = 0; i < responseEvents.length; i++) {
        //set up variables to create new jamebaseEvent
        let eventDate = responseEvents[i].Date,
          artistName = responseEvents[i].Artists[0].Name,
          ticketUrl = responseEvents[i].TicketUrl,
          venue = responseEvents[i].Venue.Name,
          venueLink = responseEvents[i].Venue.Url,
          city = responseEvents[i].Venue.City,
          jambaseEvent = new JambaseEvent(eventDate, artistName, ticketUrl, venue, venueLink, city)
      } // for loop close

    } else {
      alert("Response contains 0 events!")
    }
  }



} // jambaseEventController close

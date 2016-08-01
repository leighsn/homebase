class JamBaseEventController {

  init() {
    console.log('JamBaseController.init() is being reached')
    this.jambaseEventAdapter()
  }

  feedBuilder(){
    console.log('feedBuilder is being called')
    for (var i = 0; i < 15; i++) {
      Store.jambaseEvents[i].build()
    }
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
      JamBaseEventController.prototype.jamebaseEventFactory(response.Events)
      JamBaseEventController.prototype.feedBuilder()
    }) // callback function within .done
  } //jambaseEventAdapter close


  jamebaseEventFactory(responseEvents) {
    if (responseEvents.length > 0) {
      for (var i = 0; i < responseEvents.length; i++) {
        //set up variables to create new jamebaseEvent
        let eventDate = responseEvents[i].Date
        let artistName = responseEvents[i].Artists[0].Name
        let ticketUrl = responseEvents[i].TicketUrl
        let venue = responseEvents[i].Venue.Name
        let venueLink = responseEvents[i].Venue.Url
        let city = responseEvents[i].Venue.City
        var jambaseEvent = new JambaseEvent(eventDate, artistName, ticketUrl, venue, venueLink, city)
      } // for loop close

    } else {
      console.log("Response contains 0 events!")
    }
  }

} // jambaseEventController close

class JamBaseEventController {

  init() {
    console.log('JamBaseController.init() is being reached')
    this.jambaseEventAdapter()
    //fire off function to display all events
    //function1 is called
    //function 1 iterates over Store.Events
    //function function1 calls on jambaseEVent model method to build out tags
  }

  jambaseEventAdapter(){
    //variables for ajax call
    var userZip = Store.users[0].zipcode
    var urlString = `http://api.jambase.com/events?zipCode=${userZip}&radius=25&page=0&api_key=wd28u67g657ma3kzxjbdptac`
    console.log(urlString)

    // make ajax call & parse results
    $.ajax({
      method: "GET",
      url: urlString
    }).done(function(response) {

      if (response.Events.length > 0) {
        var rE = response.Events
        for (var i = 0; i < rE.length; i++) {
          //set up variables to create new jamebaseEvent
          let eventDate = rE[i].Date
          let artistName = rE[i].Artists[0].Name
          let ticketUrl = rE[i].TicketUrl
          let venue = rE[i].Venue.Name
          let venueLink = rE[i].Venue.Url
          let city = rE[i].City

          var jambaseEvent = new JambaseEvent(eventDate, artistName, ticketUrl, venue, venueLink, city)
        } // for loop close
      } else {
        console.log("Response contains 0 events!")
      }

    }) // anon function .done
  } //jambaseEventAdapter close
} // jambaseEventController close

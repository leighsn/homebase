class JamBaseController {
  init() {
    jambaseEventAdapter()
  }

  function jambaseEventAdapter(){
    var userZip = Store.users[0].zipcode
    var urlString = `http://api.jambase.com/events?zipCode=${userZip}&radius=25&page=0&api_key=wd28u67g657ma3kzxjbdptac`
    console.log(urlString)

    $.ajax({
      method: "GET",
      url: urlString
    }).done(function(response) {
      //create jambase objects
      rE = response.Events

      //iterate through the reponses and create an event model for each response
      for (var i = 0; i < rE.length; i++) {
        //set up variables to create new jamebaseEvent
        let eventDate = rE[i].Date
        let artistName = rE[i].Artists[0].Name
        let ticketUrl = rE[i].TicketUrl
        let venue = rE[i].Venue.Name
        let venueLink = rE[i].Venue.Url
        let city = rE[i].City

        //create new JambaseEvent instance
        var jambaseEvent = new JambaseEvent()

      }

      })
  } //jambaseEventAdapter
}

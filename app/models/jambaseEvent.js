const JambaseEvent = (function(){
  var counter = 0;

  return class {
    constructor(eventDate, artistName, ticketUrl, venue, venueLink, city) {
      this.eventDate = eventDate
      this.artistName = artistName
      this.ticketUrl = ticketUrl
      this.venue = venue
      this.venueLink = venueLink
      this.city = city

      Store.jambaseEvents.push(this)
      console.log('Created new jambaseEvent object')
    }
  }

  displayBuilder() {
    //takes an object and creates all the necessary tags
    //then appends all tags to DOM
    //will eventually replace with Handlebars
  }
}())

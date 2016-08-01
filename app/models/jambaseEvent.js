const JambaseEvent = (function(){
  var counter = 0;

  return class {
    constructor(eventDate, artistName, ticketUrl, venue, venueLink, city) {
      this.id = counter++
      this.eventDate = eventDate
      this.artistName = artistName
      this.ticketUrl = ticketUrl
      this.venue = venue
      this.venueLink = venueLink
      this.city = city

      //get & set user_id
      var current_username = $('#username').val()
      var current_user_object = Store.users.find( (user) => {return user.name === current_username})
      this.user_id = current_user_object.id

      Store.jambaseEvents.push(this)
      console.log('Created new jambaseEvent object')
    }

    displayBuilder(){

    }
  }

}())

const JambaseEvent = (function(){
  var counter = 0;

  return class {
    constructor(eventDate, artistName, ticketUrl, venue, venueLink, city) {
      this.id = counter++
      this.eventDate = JambaseEvent.prototype.dateFixer(eventDate)
      this.artistName = artistName
      this.ticketUrl = ticketUrl
      this.venue = venue
      this.venueLink = venueLink
      this.city = city

      //get & set user_id
      var current_username = $('#username').val()
      var current_user_object = Store.users.find( (user) => {return user.name === current_username})
      this.user_id = current_user_object.id

      //save object to Store
      Store.jambaseEvents.push(this)
      console.log('Created new jambaseEvent object')
    }

    dateFixer(date){
      //"2016-08-01T18:00:00" fix this
      var year = date.slice(0, 4)
      var month = date.slice(5, 7)
      var day = date.slice(8, 10)
      return `${month}/${day}/${year}`
    }

    // build(){
    //   $('#event-feed').append(`<li>
    //       <div class="panel panel-default">
    //         <div class="panel-heading">
    //           <span>
    //             <h3 class="panel-title">
    //             </h3>
    //         </div>
    //         <div class="panel-body">
    //           <h2> <a href="${this.ticketUrl}"> ${this.artistName} </a></h2>
    //           <h3> <a href="${this.venueLink}">${this.venue}</a> </h3>
    //           <h4> ${this.city} | ${this.eventDate} </h4>
    //           <br>
    //         </div>
    //       </div>
    //     </li>`)
    // }
  }

}())


// <span>'+ element.address +'</span>
// <br/>
// <span>'+ element.city +', '+ element.state +'</span>

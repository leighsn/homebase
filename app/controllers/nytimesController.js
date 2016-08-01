class nytimesController {

  init() {
    console.log('NYTIMES.init() is being reached')
    this.nytimesAdapter()
  }

  nytimesAdapter(){
     var url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/30.json";
     url += '?' + $.param({
         'api-key': nyt_key
     });
     $.ajax({
         url: url,
         method: 'GET',
     }).done(function(result) {
         var list= result.results
         for (var i=0; i<list.length; i++)
         {
            let url=list[i].url
            let byline= list[i].byline
            let title= list[i].title
            let published_date=list[i].published_date
            let image=list[i].media[0]["media-metadata"][0].url

            var nytimesArticle= new NYtimesArticle(url,byline,title,published_date,image)
         }
         console.log(result);
     }).fail(function(err) {
         throw err;
     });



    // var urlString = `http://api.jambase.com/events?zipCode=${userZip}&radius=25&page=0&api_key=wd28u67g657ma3kzxjbdptac`
    // console.log(urlString)

    // // make ajax call & parse results
    // $.ajax({
    //   method: "GET",
    //   url: urlString
    // }).done(function(response) {

    //   if (response.Events.length > 0) {
    //     var rE = response.Events
    //     for (var i = 0; i < rE.length; i++) {
    //       //set up variables to create new jamebaseEvent
    //       let eventDate = rE[i].Date
    //       let artistName = rE[i].Artists[0].Name
    //       let ticketUrl = rE[i].TicketUrl
    //       let venue = rE[i].Venue.Name
    //       let venueLink = rE[i].Venue.Url
    //       let city = rE[i].City

    //       var jambaseEvent = new JambaseEvent(eventDate, artistName, ticketUrl, venue, venueLink, city)
    //     } // for loop close
    //   } else {
    //     console.log("Response contains 0 events!")
    //   }

  } //jambaseEventAdapter close
} // jambaseEventController close

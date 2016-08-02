class ForecastController {
  init(userZip) {
    console.log('forecastcontroller has been reached')
    this.zipcodeAdapter(userZip)
  }

  zipcodeAdapter(userZip){
     var latitude=0;
     var longitude=0; 
     $.ajax({
       url : "http://maps.googleapis.com/maps/api/geocode/json?address=santa+cruz&components=postal_code:"+userZip+"&sensor=false",
       method: "POST",
       success:function(data){
           latitude = data.results[0].geometry.location.lat;
           longitude= data.results[0].geometry.location.lng;
           ForecastController.prototype.forecastAdapter(latitude,longitude)
       
       }
    })
  }

  forecastAdapter(latitude,longitude){
    $.ajax({
       url : `https://api.forecast.io/forecast/${forecast_key}/${latitude},${longitude}`,
       method: "GET"
    }).done(function(response){
      let daySummary=response.daily.summary
      let dayTempMax= response.daily.data[0].temperatureMax
      let dayTempMin=response.daily.data[0].temperatureMin
      ForecastController.prototype.renderForecast(daySummary,dayTempMax, dayTempMin)
    })
  }

  renderForecast(daySummary,dayTempMax, dayTempMin)
  {
    $('#weather-feed').append(`
        <div class="col-md-9">
          <p> ${daySummary} Today Max: ${dayTempMax} Today Min: ${dayTempMin} </p> 
        </div>
        <div class="col-md-3">
          <input class="btn btn-secondary" id="send-text" type="submit" value="Get Weather Text">
        </div>
    `)
     ForecastController.prototype.addTexterEventHandler(daySummary,dayTempMax,dayTempMin)
  }

  addTexterEventHandler(daySummary,dayTempMax,dayTempMin) {
    var twController= new twilioSendTextController();
    twController.init(daySummary,dayTempMax,dayTempMin)
  } 


}
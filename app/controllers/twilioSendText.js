class twilioSendTextController {
    init(daySummary,dayTempMax,dayTempMin) {
      this.twilioSubmitListener(daySummary,dayTempMax,dayTempMin)
      console.log('twilio.init() being called')
    }

    twilioSubmitListener(daySummary,dayTempMax,dayTempMin) {
      $('#send-text').on('click', function(event) {
        //on submit -------
        event.preventDefault()
        console.log('texter Submit Working')
        
        TwilioSMS.sendMessage(
          '+14087086249',
          '+14082171539',
          `Hello! There is ${daySummary}. We will see temperatures up to ${dayTempMax} and down to ${dayTempMin}`,

          function ok() {
            console.log("Message sent!");
          },
          function fail() {
            console.log("Failed to send your message!");
          }
        );
      })
      }
}


class twilioSendTextController {
    init() {
      this.twilioSubmitListener()
      console.log('twilio.init() being called')
    }

    twilioSubmitListener() {
      $('#text-form-submit').on('click', function(event) {
        //on submit -------
        event.preventDefault()
        console.log('texter Submit Working')
        
        TwilioSMS.sendMessage(
          '+14087086249',
          '+14082171539',
          'Hey chap',

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


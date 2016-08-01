class twilioController {
  init() {
    console.log('twilio init controller has been reached')
    this.twilioAdapter()
  }

  twilioAdapter(){
      var TwilioSMS = (function($) {

      var accountSid = 'AC18e64556d07f74c4c3c5d43f0775b2b1'; // replace with your account SID
      var authToken = '9a0fd2e778b44850fdb4f69708c92924'; // replace with your auth token

      var testEndpoint = 'https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/SMS/Messages.json';
      var liveEndpoint = 'https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json';

      var sendMessage = function(to, from, body, successCallback, failCallback) {
        var data = {
          To: to,
          From: from,
          Body: body
        };

        $.ajax({
          method: 'POST',
          url: testEndpoint,
          //url: liveEndpoint, // uncomment this in production and comment the above line
          data: data,
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded', // !
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization",
              "Basic " + btoa(accountSid + ":" + authToken) // !
            );
          },
          success: function(data) {
            console.log("Got response: %o", data);

            if (typeof successCallback == 'function')
              successCallback(data);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log("Request failed: " + textStatus + ", " + errorThrown);

            if (typeof failCallback == 'function')
              failCallback(jqXHR, textStatus, errorThrown);
          }
        });
      }

      return {
        sendMessage: sendMessage
      };

    })(jQuery);
  }



}
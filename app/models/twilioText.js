var TwilioSMS = (function($) {

  var accountSid = 'AC88294b3dfbf1f4e1ec2e7cdcbc4e7dea'; // replace with your account SID
  var authToken = 'e826550dc311ec0a11c6ac2cf5008ee2'; // replace with your auth token

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
      //url: testEndpoint,
      url: liveEndpoint, // uncomment this in production and comment the above line
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
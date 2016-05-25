/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var fb = require("facebook");

var currentDate = new Date();
var formattedDate = currentDate.getFullYear() + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate()) + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes()) + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

var message = "Check out this imagi: http://www.google.com/intl/en_ALL/images/logo.gif";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAHsHRn59X97Dbv3Qw8Se8xSZAjfsPje4Gg0AZCrnDRh8fkXooxu6XYmbXlZB6oRE6zkU7mZAXYNow5XiPG6hptfCEk0uN3xsoKmto2wX4SkZBGFJE0jB7zJsUcGJ5o3vlfV2kkq6wRSFlMOZA6XT1qysBTaqb4MXMCLIOVx4ieJQnod8tOAI8uxLZC8DdX47gZDZD"
};

return fb.post(message, credentials);


function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   				   				   				   				   				   				   				   										
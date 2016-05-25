/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var currentDate = new Date();
var formattedDate = currentDate.getFullYear()
  + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate())
  + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes())
  + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAD6ZBqesKhBvKw8zUfMdk0P83VoLsXzCq8FWZC0zLYRW6YLq0i7Y9F1ERYa8krdPYCGwtLPeZBfsxPAFPZBFZBEsHFxu9GrntWmgIMKj8m8p4ZAZB3CCWnlKHQXKjAzdYWmEC0ZAyjk7ZBHVyiwOC0zAOy53ktQhjmNuv7ZAtK0wsTDZBf9PGSdSXZBwlMotNnIYXQZDZD"
};

return facebookPost("This is a beautiful posting day, Holla Scriptr! " + formattedDate, credentials);

function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   				   				   				   				   				   				   				   				   										
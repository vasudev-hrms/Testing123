/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 /* This is an example of posting a video to Facebook. */

var fb = require("facebook");

//Define the resource URL to call
var url = "https://graph.facebook.com/me/feed";

//Define additional parmameters to pass
var params = {"message": "some msg to post from Julz", "link" : "http://www.google.com"};

//Define the HTTP Request Method to use
var method = "POST";

//Define the credentials
var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAHSXpZBHmObnKrmrQoXy8wZCwi959DsHEUJzpNmr2I5veCMBGsxselURdCkYUkno3tIqex13QftXznkjZBqsLZCRICbw060woyaMOkoQO3nFwXrU93AlC4BOrmZAneDZBZBOGRR1WLJBfLYD3sEJvz01rupVqQd8yRXnwq98zRPQW39FTXQCrdPT6AEVafWmwZDZD"
};

return fb.callApi(url, method, params);   				   				   				   				   				   				   				   				   				   										
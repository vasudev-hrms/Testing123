/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 // Require the twitter module in order to be able to call the APIs
var tw = require("twitter");

// In this example, we are tweeting to Twitter using the configuration saved in Settings.
tw.tweet("Using Twitter module and default configuration to verify tweet");
tweet("Using Direct Function and default configuration to verify tweet")

// In this example, we are tweeting to Twitter using a different set of configuration than the one saved in Settings.
var credentials= {
   "consumerKey": "vwWA3tUguJP1LKO4CG8i6Og8j",
   "consumerSecret": "hd6l7Jw6mZoMRmSyaCyhFslkSVD8NMtNjqvaKhbTgfj4553HVw",
   "accessToken": "3877486769-qfutWNIAF9WayYpdQq6DCs5Lish9WYEW7OYWFhM",
   "accessTokenSecret": "dQ1AE7Zi1P0mNQFd9t61gEPfD8YszwYcWNVJXDWH9syhS"
 };
return tw.tweet("Using matrix configuration to verify tweet", credentials);			
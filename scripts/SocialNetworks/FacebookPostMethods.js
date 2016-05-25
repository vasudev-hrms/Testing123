/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 // Require the facebook module to be able to call the post API on it.
var fb = require("facebook");

// In this example, we are posting to Facebook using the configuration saved in Settings.
fb.post("Using Facebook module and default configuration to verify post");
facebookPost("Using Direct Function facebookpost and default configuration to verify post")

// In this example, we are posting to Facebook using a different set of configuration than the one saved in Settings.
var credentials = {
   "apiKey": "694188234016201",
   "apiSecret": "307ff29a901ac41ea2ea2bdc68c65cb1",
   "accessToken": "CAAJ3XEsYhckBAEcPBZAefWJcwNlrmg4qK0HwLZBcCoKjGkB8fKf5sEfIOOEG1dlNgG7ZBiupR93uIP400jCSVFf55X2Je8ZBnCOZB1GTAC6zPBMDOiOAgaq88nUudehRCtwIEh3Idl5xT7018DCoUSlZCjlnZBBIxvIEzHXILBXZBZB6xGt411Nmq"
};
return fb.post("Using matrix configuration to verify post", credentials);			
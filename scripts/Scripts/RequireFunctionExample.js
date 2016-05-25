/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 // require the "http" module. 
// USAGE: Require function allows you to include a module(IT IS HTTP IN THIS CASE) inside your script in order to be able to use its functions and objects. 
var http = require("http");

// After requiring the module "http" you can use its function "request"
// USAGE: You can use the "REQUEST" built-in object to retrieve the HTTP request parameters as well as other useful information. 
var response = http.request({"url": "http://api.openweathermap.org/data/2.5/weather","params": {"q":"london,uk"}});
return response;   							
/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 // require the "http" module
var http = require("http");
// build a request. You should at least provide the "url" field
var requestObject = {
  "url": "http://api.openweathermap.org/data/2.5/weather",
  "params": {"q":"london,uk"},
  "method": "GET" // optional if GET
}
// send the request by invoking the request function
// of the http module and store the returned response object
var response = http.request(requestObject);
// get the body of the response as a string
var responseBodyStr = response.body;
// check the status of the response
if (response.status == "200") {
  // manipulate the response headers
  if (response.headers["Content-Type"].indexOf("application/json") > -1) {
    return JSON.parse(responseBodyStr);
  }
  return responseBodyStr;
}else {
  return "Remote API returned an error " + response.status;
}			
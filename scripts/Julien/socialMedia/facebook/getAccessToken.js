/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var oauthVerifier = "AQAuQOK5kVGiV_en1aSgArZh6tH8g6cl0dKLY4hQ1YpSuBFqwe9oHGIfuCJ42XMIesAaAwcErpWJpNPjVAHC9CInKcD1Ko-RAPSzXb9Wyi9KiPlHyCJzgHgWyzQNDJ0TK0UTuSOc2yJeabpHf6MxXMkiDCB8OQ5wMOy2JqIDv8JxLgGbL3KZSOC_sMmMxBT6tyAkf_vmuafrTkoesrQB9X3HOADWknMyvOvBp-is7qYB161xBSr3NOB-gQuz4PVasXSmsBKdyIhed-JVwKLRAW6lmJH3bYDqlyLUUUMJfx95SbS7qETwoJqItlJLqxIOUlTxFCiCioNLggZGzsz-F1Rk";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};

return fb.getAccessToken(callbackUrl, oauthVerifier, credentials);   				   				   				   				   				   				   										
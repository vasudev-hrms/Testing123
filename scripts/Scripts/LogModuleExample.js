/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 // The default level being OFF, remember to always configure your log level as needed. e.g. log.setLevel("DEBUG");
// Log traces older than two weeks will be automatically deleted.

var log = require("log");

log.setLevel("DEBUG"); //levels are ERROR | WARN | INFO | DEBUG | OFF


log.error("This is the error message of the script");
log.warn("This is the warning message of the script");
log.info("This is the info message of the script");
log.debug("This is the debug message of the script");			
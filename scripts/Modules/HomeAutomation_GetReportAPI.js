/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var logger = require("log");
logger.setLevel("DEBUG");

var homeAutomation = require("Modules/HomeAutomationModule");
var homeAutomationMgr = new homeAutomation.HomeAutomationManager();
return homeAutomationMgr.getReport();


			
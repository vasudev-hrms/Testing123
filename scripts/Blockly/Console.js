/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_Console_log" id="1" inline="true" x="1" y="19"><field name="level">log</field><value name="message"><block type="text" id="2"><field name="TEXT">This is a log message</field></block></value><next><block type="scriptr_Console_log" id="3" inline="true"><field name="level">info</field><value name="message"><block type="text" id="4"><field name="TEXT">This is an info message</field></block></value><next><block type="scriptr_Console_log" id="5" inline="true"><field name="level">warn</field><value name="message"><block type="text" id="6"><field name="TEXT">This is a warning message</field></block></value><next><block type="scriptr_Console_log" id="7" inline="true"><field name="level">error</field><value name="message"><block type="text" id="8"><field name="TEXT">This is an error message</field></block></value><next><block type="scriptr_Console_log" id="9" inline="true"><field name="level">debug</field><value name="message"><block type="text" id="10"><field name="TEXT">This is a debugging message</field></block></value><next><block type="scriptr_return" id="11" inline="false"><value name="return"><block type="text" id="44"><field name="TEXT">This is a debugging message</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>*#*#*/
(function(){ console.log('This is a log message')})();(function(){ console.info('This is an info message')})();(function(){ console.warn('This is a warning message')})();(function(){ console.error('This is an error message')})();(function(){ console.debug('This is a debugging message')})();return 'This is a debugging message'   							
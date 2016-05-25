/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_tweet" id="1" inline="true" x="370" y="70"><value name="tweetString"><block type="text" id="19"><field name="TEXT">"Hello"</field></block></value></block></xml>*#*#*/
tweet ('"Hello"');
			
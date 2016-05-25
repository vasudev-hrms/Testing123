/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="1" inline="false" x="32" y="89"><value name="return"><block type="scriptr_sendmail" id="2" inline="false"><value name="to"><block type="text" id="3"><field name="TEXT">julien.mrad@elementn.com</field></block></value><value name="from"><block type="text" id="4"><field name="TEXT">rabih.nassar@elementn.com</field></block></value><value name="subject"><block type="text" id="5"><field name="TEXT">testing Email block</field></block></value><value name="body"><block type="text" id="6"><field name="TEXT">this is sent from scriptr.io's Blockly</field></block></value></block></value></block></xml>*#*#*/
return sendMail ('julien.mrad@elementn.com', 'rabih.nassar@elementn.com', 'testing Email block', 'this is sent from scriptr.io\'s Blockly')			
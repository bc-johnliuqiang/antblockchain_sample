"use strict";module.exports={InvalidNumberOfSolidityArgs:function(){return new Error("Invalid number of arguments to Solidity function")},connection:function(r){var e=new Error("CONNECTION ERROR: Could not connect "+r+".");return e.type="connection",e},response:function(){var r=new Error("Response ERROR: Response is not JSON");return r.type="responseNotJSON",r},timeout:function(){return new Error("CONNECTION TIMEOUT")},unauthorized:function(){return new Error("CONNECTION UNAUTHORIZED")},api:function(r){return new Error("API ERROR: "+r+" is not API")},param:function(r){return new Error("PARAMETER ERROR: The value of "+r+" is error")},contractDeploy:function(r){return new Error("CONTRACT ERROR: The contract of "+r+" is not deploy")},returnCode:function(r){var e=new Error("ERROR: The return_code is "+r);return e.type="returnCode",e.code=r,e},receiptResult:function(r){var e=new Error("ERROR: The Receipt result is "+r);return e.type="receiptResult",e.code=r,e},codeResult:function(r,e){return new Error("ERROR: The return_code is "+r+". The Receipt result is "+e)}};
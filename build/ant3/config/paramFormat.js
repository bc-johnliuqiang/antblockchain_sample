"use strict";var util=require("../util"),VmType=require("./vmType"),Errors=require("../errors");function inputdecimal(t){return util.toDecimal(t)}function inputhash(t){if(util.isString(t)){if(0===t.indexOf("0x")){if(66===t.length)return t;if(t.length<66)return"0x"+util.padEnd(util.toHex(t).slice(2),64)}return util.getHash(t)}return util.isBuffer(t)?util.bufferToHex(t):"0x"+util.padEnd(util.toHex(t).slice(2),64)}function inputbytes(t){return util.isBuffer(t)?util.bufferToHex(t):util.isString(t)&&0===t.indexOf("0x")?t:util.toHex(t)}function inputcode(t,u,i){u||(u=VmType.EVM),i||(i="");var e="",r="",n=0;if(util.isBuffer(t)?(n=t.length,e=t.toString("hex")):util.isString(t)&&(0===(e=t).indexOf("0x")&&(e=e.slice(2)),n=e.length/2),"wasm"===u){u=VmType.WASM;var o=new Buffer(4);o.writeUInt32BE(n),r=o.toString("hex")}if(""===e)throw Errors.param("code");return"0x"+u+r+e+i}function outputdecimal(t,u){return util.isBuffer(t)&&(t=t.toString("hex")),util.toDecimal(t,u)}function outputbytes(t){return util.isBuffer(t)&&(t=t.toString("hex")),t?"0x"+t:""}function outputhash(t){return outputbytes(t)}function outputstring(t){return util.isBuffer(t)&&(t=t.toString("hex")),util.toUtf8(t)}module.exports={inputdecimal:inputdecimal,inputhash:inputhash,inputbytes:inputbytes,inputcode:inputcode,outputdecimal:outputdecimal,outputbytes:outputbytes,outputhash:outputhash,outputstring:outputstring};
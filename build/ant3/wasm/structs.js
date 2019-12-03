"use strict";var Fcbuffer=require("fcbuffer"),schema=require("./schema"),Buffer=require("safe-buffer").Buffer;module.exports=function(){var l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0,e=Object.assign({},abiOverride(function(r,e){var t=l.abiCache.abi(e),f=!0,o=!1,n=void 0;try{for(var i,s=t.abi.interfaces[Symbol.iterator]();!(f=(i=s.next()).done);f=!0){var u=i.value;if(u.name===r){var a=t.structs[u.type];if(null!=a)return a}}}catch(r){o=!0,n=r}finally{try{f||null==s.return||s.return()}finally{if(o)throw n}}var c=t.structs[r];if(null!=c)return c;throw new Error("Missing ABI interface: ".concat(r))}),wasmCodeOverride(l),l.override),t=Object.assign({},{},l.customTypes);(l=Object.assign({override:e},{customTypes:t},l)).sort=Object.assign({},l.sort);var f=Object.assign({},schema,r),o=Fcbuffer(f,l),n=o.structs,i=o.types,s=o.errors,u=o.fromBuffer,a=o.toBuffer;if(0!==s.length)throw new Error(JSON.stringify(s,null,4));return{structs:n,types:i,fromBuffer:u,toBuffer:a}};var abiOverride=function(r){return{"abi_def.fromObject":function(r){if("string"!=typeof r)return Buffer.isBuffer(r)?JSON.parse(r.toString()):null;var e=Buffer.from(r,"hex").toString();return 0===e.length&&(e=Buffer.from(r).toString()),JSON.parse(e)}}},wasmCodeOverride=function(i){return{"setcode.code.fromObject":function(r){var e=r.object,t=r.result;try{var f=e.code.toString();if(/^\s*\(module/.test(f)){var o=i.binaryen;i.debug&&console.log("Assembling WASM..");var n=Buffer.from(o.parseText(f).emitBinary());t.code=n}else t.code=e.code}catch(r){throw console.error(r,e.code),r}}}};
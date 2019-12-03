"use strict";var Structs=require("./structs"),Buffer=require("safe-buffer").Buffer;function AbiCache(e){null==e&&(e={}),e.abiCache={abi:function(e,r){if(r){Buffer.isBuffer(r)&&(r=JSON.parse(r));var a=abiToFcSchema(r,e),t=Structs(c,a);return i[e]=Object.assign({abi:r,schema:a},t)}var n=i[e];if(null!=n)return n;throw new Error("Abi '".concat(e,"' is not cached"))}};var c=Object.assign({},{defaults:!0},e),i={};return e.abiCache}function abiToFcSchema(e,a){var f={};return e.types&&e.types.forEach(function(e){f[e.new_type_name]=e.type}),e.structs&&e.structs.forEach(function(e){var r={},a=!0,t=!1,n=void 0;try{for(var c,i=e.fields[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;r[s.name]=s.type}}catch(e){t=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(t)throw n}}f[e.name]={base:e.base,fields:r},""===e.base&&delete f[e.name].base}),e.interfaces&&e.interfaces.forEach(function(e){var r=f[e.type];r?r.interface={name:e.name}:console.error("Missing abiSchema type",e.type,a)}),f}module.exports=AbiCache;
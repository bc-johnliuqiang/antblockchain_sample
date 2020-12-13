"use strict";var parseKeys=require("parse-asn1"),randomBytes=require("randombytes"),createHash=require("create-hash"),mgf=require("./mgf"),xor=require("./xor"),BN=require("bn.js"),withPublic=require("./withPublic"),crt=require("browserify-rsa"),Buffer=require("safe-buffer").Buffer;function oaep(r,e){var o=r.modulus.byteLength(),n=e.length,f=createHash("sha256").update(Buffer.alloc(0)).digest(),a=f.length,u=2*a;if(o-u-2<n)throw new Error("message too long");var t=Buffer.alloc(o-n-u-2),s=o-a-1,i=randomBytes(a),l=xor(Buffer.concat([f,t,Buffer.alloc(1,1),e],s),mgf(i,s)),c=xor(i,mgf(l,a));return new BN(Buffer.concat([Buffer.alloc(1),c,l],o))}function pkcs1(r,e,o){var n,f=e.length,a=r.modulus.byteLength();if(a-11<f)throw new Error("message too long");return n=o?Buffer.alloc(a-f-3,255):nonZero(a-f-3),new BN(Buffer.concat([Buffer.from([0,o?1:2]),n,Buffer.alloc(1),e],a))}function nonZero(r){for(var e,o=Buffer.allocUnsafe(r),n=0,f=randomBytes(2*r),a=0;n<r;)a===f.length&&(f=randomBytes(2*r),a=0),(e=f[a++])&&(o[n++]=e);return o}module.exports=function(r,e,o){var n;n=r.padding?r.padding:o?1:4;var f,a=parseKeys(r);if(4===n)f=oaep(a,e);else if(1===n)f=pkcs1(a,e,o);else{if(3!==n)throw new Error("unknown padding");if(0<=(f=new BN(e)).cmp(a.modulus))throw new Error("data too long for modulus")}return o?crt(f,a):withPublic(f,a)};
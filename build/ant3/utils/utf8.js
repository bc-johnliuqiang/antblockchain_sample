"use strict";var byteArray,byteCount,byteIndex,stringFromCharCode=String.fromCharCode;function ucs2decode(e){for(var r,t,n=[],o=0,a=e.length;o<a;)55296<=(r=e.charCodeAt(o++))&&r<=56319&&o<a?56320==(64512&(t=e.charCodeAt(o++)))?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),o--):n.push(r);return n}function ucs2encode(e){for(var r,t=e.length,n=-1,o="";++n<t;)65535<(r=e[n])&&(o+=stringFromCharCode((r-=65536)>>>10&1023|55296),r=56320|1023&r),o+=stringFromCharCode(r);return o}function checkScalarValue(e){if(55296<=e&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function createByte(e,r){return stringFromCharCode(e>>r&63|128)}function encodeCodePoint(e){if(0==(4294967168&e))return stringFromCharCode(e);var r="";return 0==(4294965248&e)?r=stringFromCharCode(e>>6&31|192):0==(4294901760&e)?(checkScalarValue(e),r=stringFromCharCode(e>>12&15|224),r+=createByte(e,6)):0==(4292870144&e)&&(r=stringFromCharCode(e>>18&7|240),r+=createByte(e,12),r+=createByte(e,6)),r+=stringFromCharCode(63&e|128)}function utf8encode(e){for(var r=ucs2decode(e),t=r.length,n=-1,o="";++n<t;)o+=encodeCodePoint(r[n]);return o}function readContinuationByte(){if(byteCount<=byteIndex)throw Error("Invalid byte index");var e=255&byteArray[byteIndex];if(byteIndex++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function decodeSymbol(){var e,r;return byteIndex!=byteCount&&(e=255&byteArray[byteIndex],byteIndex++,0==(128&e)?e:192==(224&e)&&128<=(r=(31&e)<<6|readContinuationByte())?r:224==(240&e)&&2048<=(r=(15&e)<<12|readContinuationByte()<<6|readContinuationByte())?(checkScalarValue(r),r):240==(248&e)&&65536<=(r=(7&e)<<18|readContinuationByte()<<12|readContinuationByte()<<6|readContinuationByte())&&r<=1114111?r:void 0)}function utf8decode(e){byteArray=ucs2decode(e),byteCount=byteArray.length,byteIndex=0;for(var r,t=[];!1!==(r=decodeSymbol());)t.push(r);return ucs2encode(t)}module.exports={version:"2.1.2",encode:utf8encode,decode:utf8decode};
"use strict";module.exports={transformToFullName:function(e,n){if(-1!==e.name.indexOf("("))return e.name;var r="";return r=n?n.join(","):e.inputs.map(function(e){return e.type}).join(","),e.name+"("+r+")"},extractDisplayName:function(e){var n=e.indexOf("("),r=e.indexOf(")");return-1!==n&&-1!==r?e.slice(0,n):e},extractTypeName:function(e){var n=e.indexOf("("),r=e.indexOf(")");return-1!==n&&-1!==r?e.slice(n+1,r).replace(" ",""):""}};
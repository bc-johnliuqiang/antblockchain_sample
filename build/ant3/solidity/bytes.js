"use strict";var f=require("./formatters"),SolidityType=require("./type"),SolidityTypeBytes=function(){this._inputFormatter=f.formatInputBytes,this._outputFormatter=f.formatOutputBytes};SolidityTypeBytes.prototype=new SolidityType({}),(SolidityTypeBytes.prototype.constructor=SolidityTypeBytes).prototype.isType=function(t){return!!t.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/)},module.exports=SolidityTypeBytes;
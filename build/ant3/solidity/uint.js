"use strict";var f=require("./formatters"),SolidityType=require("./type"),SolidityTypeUInt=function(){this._inputFormatter=f.formatInputInt,this._outputFormatter=f.formatOutputUInt};SolidityTypeUInt.prototype=new SolidityType({}),(SolidityTypeUInt.prototype.constructor=SolidityTypeUInt).prototype.isType=function(t){return!!t.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/)},module.exports=SolidityTypeUInt;
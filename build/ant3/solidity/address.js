"use strict";var f=require("./formatters"),SolidityType=require("./type"),SolidityTypeAddress=function(){this._inputFormatter=f.formatInputInt,this._outputFormatter=f.formatOutputAddress};SolidityTypeAddress.prototype=new SolidityType({}),(SolidityTypeAddress.prototype.constructor=SolidityTypeAddress).prototype.isType=function(t){return!!t.match(/address(\[([0-9]*)\])?/)},module.exports=SolidityTypeAddress;
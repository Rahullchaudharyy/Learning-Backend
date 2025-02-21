const Not = require("./another.js")
// import Not from "./another.js"
console.log("global",globalThis === global)  // => Windows object 
// The global is the part of the superpowers of the nodejs 
// not the part of the v8 engine 
// Not()
s="lsadlfkjalsdkfj"
console.log("this :",this)  

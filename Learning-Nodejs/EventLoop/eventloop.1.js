// console.log("1. Start");

// setTimeout(() => {
//   console.log("2. Timeout 1");
// }, 0);


// setImmediate(() => {
//   console.log("3. Immediate");
// });

// Promise.resolve().then(() => {
//   console.log("4. Promise 1");

//   setTimeout(() => {
//     console.log("5. Timeout inside Promise");
//   }, 0);

//   process.nextTick(() => {
//     console.log("6. Next Tick inside Promise");
//   });

//   return Promise.resolve();
// }).then(() => {
//   console.log("7. Promise 2");
// });

// process.nextTick(() => {
//   console.log("8. Next Tick");
// });

// Promise.resolve().then(() => {
//   console.log("9. Promise 3");
// });

// console.log("10. End");


const fs = require('fs')

setTimeout(()=>{console.log("This code will execute in the 0 seconds... ")},0)
console.log("One")
console.log("Two")

fs,fs.readFileSync("./text.txt","utf8")
console.log("This will execute after the sync file")

fs.readFile("./text.txt","utf8",(err,data)=>{
  console.log("Data: ",data)
})


console.log("Three")
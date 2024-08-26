import {URL} from 'url';
const MyUrl = new URL("https://www.example.com:9090/p/a/t/h?query=string#hash");

// console.log(MyUrl.hash)
// console.log(MyUrl.host)
// console.log(MyUrl.hostname)
// console.log(MyUrl.port)
// console.log(MyUrl.protocol)
// console.log(MyUrl.search)
// console.log(MyUrl.searchParams)


// both work same almos 

console.log(MyUrl.toString());
console.log(MyUrl.toJSON());


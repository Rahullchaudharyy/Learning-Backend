const crypto = require('node:crypto')
a = 2324231313
b= 2324242324


console.log('Code Executed !! At first.!!')
crypto.pbkdf2Sync("password124","salt",5000000,30,"sha512")
console.log('First key is genrated')

crypto.pbkdf2("password124","salt",200000,30,"sha512",(err,key)=>{
    console.log('Key is genrated successfully :',key)
})


const mul = (a,b)=>{
    let res = a*b;
    return res; 

}
cl
const c = mul(a,b)

console.log('Multlipication is :', c)
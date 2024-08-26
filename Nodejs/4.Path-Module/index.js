import path from 'path';
console.log(path.basename("c:\\nodejs\\helow.js"))
console.log(path.basename("c:\\nodejs\\helow.js",".js"))
console.log(path.extname("c:\\nodejs\\helow.js",".js"))
console.log(path.dirname("c:\\nodejs\\helow.js",".js"))

console.log(path.join("c:","nodejs","helow.js"))


console.log(path.join("c:","nodejs","helow.js",".js",".."))



console.log(path.normalize("c:////nodejs///normalize.js"))



console.log(path.parse("d:\\Backedn\\ Courses\\ Mern\\ Node.js"))
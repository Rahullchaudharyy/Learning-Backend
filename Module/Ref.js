// this will allow us to use that function from the 
// (index.js) file , and we can use it right here 

const greet = require('./index')
const {person1,person2,person3} = require('./people')

greet(person1)
greet(person2)
greet(person3)


import express from 'express'
const app = express();

// Crating a normal basic route ...

app.get('/', (req, res) => {
    res.send('<h1 style="font-size:200px">Home</h1>')
})
app.get('/About', (req, res) => {
    res.send('<h1 style="font-size:200px">👀👀👀👀</h1>')
})
app.get('/Contact', (req, res) => {
    res.send('<h1 style="font-size:200px">Contact Me through </h1>')
})

// Advance Routing 
// Regix = Regular expression 
app.get('/ab?cd', (req, res) => {
    res.send('<h1 style="font-size:200px">abcd ot acd </h1>')
})
app.get(/x/, (req, res) => {
    res.send('<h1 style="font-size:200px">If the url is include the x then it will work .. </h1>')
})
app.get(/^\/users\/[0-9]{5}$/, (req, res) => {
    res.send('<h1 style="font-size:100px">If the url like this "users/anyFivedigit Numb" then it will work .. </h1>')
})

// HTTP Methods 
// GET = Retrive the data
// POST =  Create/insert Data
// PUT = Completly Updata the data 
// PATCH = PARTIALLY Update the data 
// DELETE = delte the data 
// ALL = Any HTTP Request Method 

// Nested Route 

let Product = 'Android';
app.get(`/Products/${Product}`, (req, res) => {
    res.send(`This will only work on the url Products/${Product}`)
})

// Two Callback 

app.get('/Single-cb', (req, res, next) => {
    //   res.send('<h1>Hey Its a first callback </h1>')
    console.log('first Callback')
    next();

},
    (req, res) => {
        res.send('<h1>Hey Its a Second callback </h1>')

    })


    const cb1 = (res,req,next)=>{
        console.log('I am first nothing else');
        next();

    }
    const cb2 = (res,req,next)=>{
        console.log('I am Second nothing else');
        next();
    }

    app.get('/Hey', [cb1,cb2],(req,res,next)=>{
        console.log("I am third")
        next();

    },(req,res,next)=>{
     res.send("<h1>Finally you are here on the final page of the last callback !!</h1>")
        next();
        
    })
    console.clear()


app.listen(3000, () => {
    console.log("Connected")
})
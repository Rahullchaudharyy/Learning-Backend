import express from 'express'

const app = express();

// app.get('/ecom/orders/:date/:month/:year',(req,res)=>{
    //res.send(req.params.model);
    // Destructuring 
    // const {category,model} = req.params;
    // const {date,month,year } = req.params;

    // res.send(`The category you have selected that is ${category} and the result is ${model}`);
    // res.send(`Your order has diliverd on the ${date}/${month}/${year}`);


// })

   app.param("id",(req,res,next,id)=>{
    console.log(`id:${id}`)
    next();

   })
   app.get('/user/:id',(req,res)=>{
    res.send('THis is the user id path')
   })


app.listen(3000,(req,res)=>{
    console.log('Hello Server is now started')
})



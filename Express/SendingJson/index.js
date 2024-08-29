import express from "express";
import product from "./Data.js";
const app = express();



app.get('/product',(req,res)=>{
  res.json(product)
})
app.listen(3000, () => {
  console.log("Server Started Now!!!");
});



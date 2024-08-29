import express from "express";
const app = express();



app.get('/product',(req,res)=>{
  // res.send(`Resposns is OK${req.query.category}`)
  const {category,id} = req.query; 
  res.send(`category:${category} id:${id}`)
})
app.listen(3000, () => {
  console.log("Server Started Now!!!");
});



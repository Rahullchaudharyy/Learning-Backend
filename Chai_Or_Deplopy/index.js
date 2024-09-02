import express from 'express'
import { configDotenv } from 'dotenv';
const app = express();


app.get('/',(req,res)=>{
    res.send("Hey you are on the home page ")
})

app.listen(process.env.PORT,()=>{
   console.log("Server Started on Port 3000")
})

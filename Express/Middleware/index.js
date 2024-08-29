import express from "express";
import UserCredentialsMiddleware from './middlewares/logs.js'
const app = express();
 
// Middleware is fucntion that takes 3 parameters that is always use between the '/product' and ()=>{} hope you getting . 
app.use(UserCredentialsMiddleware) // if we use the middleware function inside the app.use(UserCredentialMiddleware) then it would be allow us to run the middleware on the every request means on the evry url .. you got it ??
app.get('/',(req,res)=>{
   res.send(` Hello admin`)
})

app.get('/about',(req,res)=>{
  res.send(` ABout`)
})


app.listen(3000, () => {
  console.log("Server Started Now!!!");
});



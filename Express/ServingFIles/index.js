import express from 'express'
import path from 'path'
const app = express()

 app.use(express.static('./public'))
 app.get('/home',(req,res)=>{
    res.sendFile(path.join(process.cwd(), './public/index.html'))
 })
app.listen(3000,(req,res)=>{
    console.log('Server has been started...');
})
import express from 'express'
import student from './routes/students.js'

const app = express()

app.use('/students',student)


app.listen(3000,(req,res)=>{
    console.log('Server has been started...');
})
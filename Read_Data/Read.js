import express from 'express'
import conectDB from './db/ConenctDB.js';
// import MovieModel from './models/Movies.js';
import { AllDocs, SingleDocs,UpdateByid,Delete } from './models/Movies.js';
const app = express()
const port = process.env.PORT || 3000;
const DatabaseUrl  = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/Movies";

conectDB(DatabaseUrl)



AllDocs()
SingleDocs()
UpdateByid('66d15caea5ae08ccac38dce0')
// Delete('Id Should Be there')  

app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})
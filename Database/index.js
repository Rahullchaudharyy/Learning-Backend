import express from 'express'
import conectDB from './db/ConenctDB.js';
// import MovieModel from './models/Movies.js';
import { insertManydoc } from './models/Movies.js';
const app = express()
const port = process.env.PORT || 3000;
const DatabaseUrl  = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/Movies";

conectDB(DatabaseUrl)


insertManydoc()


app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})
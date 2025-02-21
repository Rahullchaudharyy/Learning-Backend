import { app } from "./app.js";
import dotenv from 'dotenv'
import ConectDB from "./db/db.js";

dotenv.config(); 



const PORT = process.env.PORT

ConectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log( `Server started on the ${PORT}`)            
    });
})
.catch((err)=>{
    console.log('Something Went wrong ', err.message)
})


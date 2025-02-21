// DB Config
import mongoose from "mongoose";

const DB_ULR = 'mongodb+srv://rahul:jxbfKkLumeUkwwGx@nodejs.23kbu.mongodb.net/AuthPractice'


const ConectDb = async()=>{

        const dbConection = await mongoose.connect(DB_ULR)
        console.log("Database connected successfully ! ", dbConection.Collection)
  
}


export  default ConectDb
import mongoose from 'mongoose'

const Author = new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      



},{timestamps:true})
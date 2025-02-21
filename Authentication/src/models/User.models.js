import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,

    },
    emailId:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if (!validator.isStrongPassword(value)) {
                throw new Error("password must be string")
            }
        }
    },
    gender:{
        type:String,
        required:true,
    },
    skills:{
        type:[String],
        min:3,
        max:50
    }

},{timestamps:true})




export const User =mongoose.model('User',UserSchema)


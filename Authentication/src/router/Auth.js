import express from 'express';
import bcrypt  from 'bcrypt'

import validator from 'validator'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.models.js';

const AuthRouter = express.Router()
AuthRouter.post('/signup', async (req,res)=>{
    try {
      const {firstName,lastName,emailId,password,gender} = req.body
      // No need of validation as it has already validating the data in the databse schema 
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password,salt)
  
      const user = await new User({
          emailId,
          firstName,
          lastName,
          gender,
          password:hashPassword
      })
      
      if (!user) {
         throw new Error('Something Went wring')
      }
 
      await user.save()
  
      res.send('user created/signedUp successfully !! ')
  
    } catch (error) {
     throw new Error(error.message)
    }
 })
 
 AuthRouter.post('/signin',async (req,res) => {
     try {
         const  { emailId, password} = req.body;
         if (!validator.isEmail(emailId)) {
             throw new Error('Invalid email')
         } 
     
         const user = await User.findOne({emailId:emailId})
     
         if (!user) {
             throw new Error('Invalid Credential')
         }
     
         const isPasswordCorrect = await bcrypt.compare(password,user.password)
     
         if (!isPasswordCorrect) {
             throw new Error('Invalid Email or password')
         }
     
         const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET_KEY)
         res.cookie('token',token)
         res.send("User LoggedIn successfully !")
     } catch (error) {
         throw new Error('Eroor occure :',error.message)
     }
 })

export {AuthRouter}
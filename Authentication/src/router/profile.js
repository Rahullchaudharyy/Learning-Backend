import express from 'express';
import { AuthMiddleWare } from '../middleware/AuthMiddleWare.js';

const ProfileRouter = express.Router()
ProfileRouter.get('/profile',AuthMiddleWare,async (req,res) => {
    
    try {
      const user = req.user
      res.send("Your Profile : "+user)
    } catch (error) {
     throw new Error(error.message)
    }
     // console.log(DecodedMessage._id)
     
 })
export {ProfileRouter}


 
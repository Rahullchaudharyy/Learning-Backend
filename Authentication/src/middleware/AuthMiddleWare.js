import { User } from "../models/User.models.js";
import jwt from 'jsonwebtoken'

export const AuthMiddleWare = async (req, res, next) => {
    try {
        const cookie = req.cookies;
        const token = cookie.token;
        if (!token) {
            res.status(401).send("Please Login ")
        }
    
        const DecodedMessage = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    
        const user = await User.findById({ _id: DecodedMessage._id })
    
        if (!user) {
            res.status(201).send('Something went wrong')
        }
    
        req.user = user 
        next()
    } catch (error) {
        throw new Error(error.message)
    }

}
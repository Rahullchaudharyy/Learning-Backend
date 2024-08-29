import express from 'express'
import HomeControll from '../controllers/Homecontroller.js'
import AboutController from '../controllers/Aboutcontroller.js'

const router = express.Router()
router.get('/',HomeControll)
router.get('/about',AboutController)

 


export default router
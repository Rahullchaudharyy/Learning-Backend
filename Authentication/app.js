import express from 'express'
import ConectDb from './src/config/config.js'

import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import { AuthMiddleWare } from './src/middleware/AuthMiddleWare.js'
import { AuthRouter } from './src/router/Auth.js'
import { ProfileRouter } from './src/router/profile.js'
const app = express()
app.use(express.json())
app.use(cookieParser())

configDotenv()


app.use('/',AuthRouter)
app.use('/',ProfileRouter)

ConectDb().then(()=>{
    app.listen(3000,()=>{
        console.log(`Server started on http://localhost:3000`)
    })
})
.catch((error)=>console.log(error.message))





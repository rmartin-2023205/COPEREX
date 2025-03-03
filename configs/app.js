'use strict'

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from 'cors'
import { limiter } from "../middleware/rate.limit.js"
import userRoutes from '../src/Users/user.routes.js'
import companyRoutes from '../src/Company/company.routes.js'


const configs=(app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(limiter)
}

const routes=(app)=>{
    app.use(userRoutes)
    app.use(companyRoutes)

}

export const initServer=()=>{
    const app=express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Sever is running in port ${process.env.PORT}`)
    }catch(e){
        console.error(`Server init failed`,e)
    }
}
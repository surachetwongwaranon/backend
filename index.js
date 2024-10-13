import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use()

app.listen(port, ()=>{
    console.log('server listening on port', port);
})
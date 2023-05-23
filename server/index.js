import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import UserRouter from './router/UserRouter.js'
import PostRouter from './router/PostRouter.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use('/upload', express.static('upload'))

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB)

mongoose.connection.on('connected', () => {
  console.log('connected to mongo')
})

mongoose.connection.on('error', (e) => {
  console.log('mongoDb connection error', e)
})

app.use(UserRouter)
app.use(PostRouter)

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`)
})

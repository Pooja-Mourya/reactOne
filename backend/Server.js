import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import errorMiddleware from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoute.js'
import meetingRoute from './routes/meetingRoute.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

// MiddleWares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/upload', express.static('upload'))

// Routes Middleware
app.use('/api/users', userRoute)
app.use('/api/meeting', meetingRoute)
// Error Middleware
// app.use(errorMiddleware())

// Connect to DB and start server
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB)

mongoose.connection.on('connected', () => {
  console.log('connected to mongo')
})

mongoose.connection.on('error', (e) => {
  console.log('mongoDb connection error', e)
})
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`)
})

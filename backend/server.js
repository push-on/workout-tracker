import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

import { router as workoutRoutes } from './routes/workouts.js'
dotenv.config()

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.set("strictQuery", false); // <- disable warning 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("✅ Connected to db & 🟢 listening on port", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })




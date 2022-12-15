import mongoose from 'mongoose'
import { UserModel } from '../models/workoutModels.js'

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await UserModel.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// get single workout 
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }

  const workout = await UserModel.findById(id)

  if (!workout) {
    return res.status(404).json({ error: 'No Such workout' })
  }

  res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  // add doc to db
  try {
    const workout = await UserModel.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }

  const workout = await UserModel.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(404).json({ error: 'No Such workout' })
  }

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }

  const workout = await UserModel.findByIdAndUpdate({ _id: id },
    { ...req.body }
  )

  if (!workout) {
    return res.status(404).json({ error: 'No Such workout' })
  }

  res.status(200).json(workout)
}

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout }
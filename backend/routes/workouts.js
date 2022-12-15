import express from 'express'
import { UserModel } from '../models/workoutModels.js'
import { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController.js'

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// POST a new workout
router.patch('/:id', updateWorkout)

export { router }

import mongoose from 'mongoose'

const { Schema } = mongoose;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timeseries: true })


const UserModel = mongoose.model('Workout', workoutSchema)
export { UserModel }


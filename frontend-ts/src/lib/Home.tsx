import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// components
import { WorkoutDetails } from './WorkoutDetails'
import { WorkoutForm } from './WorkoutForm'

type Workout = {
  _id: string
  title: string
  load: number
  reps: number
}


export const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext() as any

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }
    fetchWorkouts()
  }, [])
  const workoutsArray: Workout[] = workouts

  return (
    <div className="flex flex-col justify-between md:flex-row md:space-x-10  ">
      <div className="max-w-sm space-y-5  grow">
        {workoutsArray && workoutsArray.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
import { useEffect, useState } from 'react'
import { WorkoutDetails } from './WorkoutDetails'
import { WorkoutForm } from './WorkoutForm'

export const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="flex flex-col justify-between md:flex-row md:space-x-10  ">
      <div className="max-w-sm space-y-5  grow">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
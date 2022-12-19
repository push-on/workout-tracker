import { useEffect, useState } from 'react'
import { WorkoutDetails } from './WorkoutDetails'

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
    <div className="">
      <div className="space-y-5 max-w-md">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
  )
}

import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

type wt = {
  title: string
  load: number
  reps: number
  _id: string
}

export const WorkoutDetails = ({ workout }: { workout: wt }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }
  return (
    <div className='bg-zinc-800 p-5 rounded-lg border hover:border-zinc-700 border-zinc-800 flex items-center justify-between space-x-5'>
      <div className="flex flex-col">
        <h2 className='text-blue-400 text-xl font-bold font-serif'>{workout.title}</h2>
        <p className='text-zinc-300 font-mono'><strong>Load (kg): </strong>{workout.load}</p>
        <p className='text-zinc-300 font-mono'><strong>Number of reps: </strong>{workout.reps}</p>
      </div>
      <div className='space-y-2 font-mono flex flex-col'>
        <button className=' btn btn-blue'>Update</button>
        <button className=' btn btn-red' onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

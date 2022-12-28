type wt = {
  title: string
  load: number
  reps: number
}

export const WorkoutDetails = ({ workout }: { workout: wt }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-lg hover:shadow-lg shadow-black">
      <h2 className='text-blue-400 text-xl font-bold font-serif'>{workout.title}</h2>
      <p className='text-zinc-300 font-mono'><strong>Load (kg): </strong>{workout.load}</p>
      <p className='text-zinc-300 font-mono'><strong>Number of reps: </strong>{workout.reps}</p>
    </div>
  )
}

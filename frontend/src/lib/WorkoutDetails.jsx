const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-lg hover:shadow-lg shadow-black">
      <h4 className='text-white text-xl font-bold font-serif'>{workout.title}</h4>
      <p className='text-zinc-300 font-mono'>Load (kg): {workout.load}</p>
      <p className='text-zinc-300 font-mono'>Number of reps: {workout.reps}</p>
    </div>
  )
}

export default WorkoutDetails


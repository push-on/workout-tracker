import { useState } from 'react'

export const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const workout = { title, load, reps }
    const response = await fetch('http://localhost:4000/api/workouts', {
      method: `POST`,
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      console.log('new workout added')
    }
  }

  return (
    <form className='flex flex-col space-y-3 grow max-w-xs pt-10 md:pt-0 ' onSubmit={handleSubmit}>
      <div className='text-blue-400 text-2xl font-bold'>Add a New Workout</ div>
      <label className='font-bold'>Exercise Title</label>
      <input
        className='input-box '
        type="text"
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
        placeholder="push-ups"
      />
      <label className='font-bold'>Load (in Kg):</label>
      <input
        className='input-box'
        type="number"
        onChange={(e) => { setLoad(e.target.value) }}
        value={load}
        placeholder="10"
      />
      <label className='font-bold'>Reps:</label>
      <input
        className='input-box '
        type="number"
        onChange={(e) => { setReps(e.target.value) }}
        value={reps}
        placeholder="5"
      />
      <button className='btn'>Add Workout</button>
      {error && <div className='p-3 rounded-lg border-4 border-red-500/20 bg-red-900/20 text-red-400 italic'>{error}</div>}
    </form>
  )
}
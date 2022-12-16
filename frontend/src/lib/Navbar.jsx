import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-zinc-800 '>
      <div className="font-bold flex items-center justify-between py-10 px-20 text-3xl">
        <Link to='/'>
          <h1 className=' w-fit hover:underline underline-offset-8 decoration-blue-500'>
            Workout Tracker
          </h1>
        </Link>
      </div>
    </div>
  )
}

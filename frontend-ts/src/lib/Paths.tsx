import { Routes, Route } from "react-router-dom"
import { Home } from './Home'

export const Paths = () => {
  return (
    <div className='px-20 py-5'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

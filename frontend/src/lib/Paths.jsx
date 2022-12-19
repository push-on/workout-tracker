import { Routes, Route } from "react-router-dom"
import { Home } from './Home'

export const Paths = () => {
  return (
    <div className='p-20'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

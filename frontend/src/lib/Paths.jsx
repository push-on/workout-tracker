import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from './Home'

export const Paths = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

import { createContext } from 'react'

export const WorkoutsContext = createContext()

export const WorkoutContextProvider = ({children}) => {
  return (
    <WorkoutsContext.Provider>
      {children}
    </WorkoutsContext.Provider>
  )
}
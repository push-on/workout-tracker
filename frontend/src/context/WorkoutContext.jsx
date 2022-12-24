import { useReducer, createContext } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUTS':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    default:
      return state
  }
}


export const WorkoutContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null })

  return (
    <WorkoutsContext.Provider>
      {children}
    </WorkoutsContext.Provider>
  )
}
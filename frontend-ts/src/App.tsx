import { Paths } from './lib/Paths'
import { Navbar } from './lib/Navbar'

export const App = () => {
  return (
    <div className='h-screen '>
      <Navbar />
      <Paths />
    </div>
  )
}

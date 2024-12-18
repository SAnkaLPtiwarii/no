import { FC } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
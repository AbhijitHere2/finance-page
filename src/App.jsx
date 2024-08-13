import { useState } from 'react'
import Finance from './components/Finance/Finance'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Finance/>
    </>
  )
}

export default App

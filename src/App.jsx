import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Codegenerator from './component/Qr-code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Codegenerator/>
    </>
  )
}

export default App

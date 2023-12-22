import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-gray-200'>
        <Navbar />
        <Products />
        <Modal />
      </div>

    </>
  )
}

export default App

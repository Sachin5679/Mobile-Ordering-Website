import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Modal from './components/Modal'

function App() {

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

import React from 'react'
import { useModal } from '../context/ModalContext'
import iphone from '../assets/images/iphone.jpeg'

const Modal = () => {

  const { isModalOpen, closeModal } = useModal()

  if (!isModalOpen) {
    return null
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold'>Phone Details</h1>
          <button className='font-semibold text-red-500' onClick={closeModal}>
            Close
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <img className='rounded-xl p-4 w-32 object-cover' src={iphone} alt="iPhone" />
          <div>
            <h1 className='text-lg font-semibold mb-2'>Name: iPhone</h1>
            <p className='text-sm mb-2'>OS: iOS</p>
            <p className='text-sm mb-2'>Price: $10,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

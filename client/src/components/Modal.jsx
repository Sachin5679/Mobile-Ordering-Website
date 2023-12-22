import React from 'react'
import { useModal } from '../context/ModalContext'

const Modal = () => {

  const { isModalOpen, closeModal } = useModal()

  if (!isModalOpen) {
    return null
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg'>
        <p>Modal Content</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  )
}

export default Modal

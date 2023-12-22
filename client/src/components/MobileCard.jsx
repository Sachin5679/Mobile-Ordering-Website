import React from 'react'
import iphone from '../assets/images/iphone.jpeg'
import { useModal } from '../context/ModalContext'

const MobileCard = ({ id, image, title, price, os, processor, memory, brand }) => {
    const { openModal } = useModal();

    const handleOpenModal = () => {
      openModal({ id, image, title, price, os, processor, memory, brand });
    }
  

  return (
    <div className='bg-gray-100 shadow-xl p-4 rounded-xl'>
      <img className='rounded-xl' src={image} alt="" />
      <div className='flex justify-between mt-3'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='font-light'>Rs. {price}</p>
      </div>
      <button className='bg-blue-500 rounded-lg p-2 w-full mt-2 text-blue-200 hover:text-blue-500 hover:bg-blue-200 transition 3s' onClick={handleOpenModal}>Learn More</button>

      
    </div>

  )
}

export default MobileCard

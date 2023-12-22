import React from 'react'
import iphone from '../assets/images/iphone.jpeg'
import { useModal } from '../context/ModalContext'

const MobileCard = () => {
    const { openModal } = useModal();
  

  return (
    <div className='bg-gray-100 shadow-xl p-4 rounded-xl'>
      <img className='rounded-xl' src={iphone} alt="" />
      <div className='flex justify-between mt-3'>
        <h3 className='text-xl font-bold'>Phone</h3>
        <p className='font-light'>Rs. 10000</p>
      </div>
      <button className='bg-blue-500 rounded-lg p-2 w-full mt-2 text-blue-200 hover:text-blue-500 hover:bg-blue-200 transition 3s' onClick={openModal}>Learn More</button>

      
    </div>

  )
}

export default MobileCard

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../context/ModalContext';

const Modal = () => {
  const { isModalOpen, closeModal, modalData } = useModal();

  if (!isModalOpen) {
    return null;
  }

  const { id, image, title, price, os, processor, memory, brand } = modalData;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-gray-300 p-8 rounded-lg w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <button className='font-semibold text-red-500 hover:text-xl transition 1s' onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <img className='rounded-xl p-4 w-32 bg-gray-100 shadow-xl object-cover' src={image} alt={title} />
          <div>
            <p className='text-sm mb-2'>Brand: {brand}</p>
            <p className='text-sm mb-2'>Price: Rs. {price}</p>
            <p className='text-sm mb-2'>Operating System: {os}</p>
            <p className='text-sm mb-2'>Processor: {processor}</p>
            <p className='text-sm mb-2'>Memory: {memory}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react'
import MobileCard from './MobileCard'

const Products = () => {
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Products</h1>
      <div className='flex justify-center'>
        <div className=' grid md:grid-cols-4 grid-cols-2 gap-12'>
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
        </div>
      </div>

    </div>
  )
}

export default Products

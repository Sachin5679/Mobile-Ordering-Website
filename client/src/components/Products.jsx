import React from 'react'
import MobileCard from './MobileCard'
import iphone from '../assets/images/iphone.jpeg'


const Products = () => {

  const phones = [
    { id:1, image:iphone, title: "iPhone 14", price: "10000", os: "iOS"},
    { id:1, image:iphone, title: "Galaxy S22", price: "10000", os: "Android"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},
    { id:1, image:iphone, title: "iPhone 14", price: "10000"},

  ]
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Products</h1>
      <div className='flex justify-center'>
        <div className=' grid md:grid-cols-4 grid-cols-2 gap-12'>
            {phones.map(phone => (
                <MobileCard
                    key={phone.id} 
                    image={phone.image}
                    title={phone.title}
                    price={phone.price}
                />
            ))}

        </div>
      </div>

    </div>
  )
}

export default Products

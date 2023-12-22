import React from 'react'
import MobileCard from './MobileCard'
import iphone from '../assets/images/iphone.jpeg'
import samsungs22 from '../assets/images/samsungs22.jpeg'
import huwawei from '../assets/images/huwawei.jpeg'
import oppo from '../assets/images/oppo.jpeg'


const Products = () => {

  const phones = [
    { id:1, image:iphone, title: "iPhone 14", price: "10000", os: "iOS", processor:'Hexa-core', memory:'128GB 6GB RAM', brand:'Apple'},
    { id:2, image:samsungs22, title: "Galaxy S22", price: "36,999", os: "Android", processor:'Octa-core', memory:'128 GB 8 GB RAM', brand:'Samsung'},
    { id:3, image:huwawei, title: "Huwawei P30", price: "59,990", os:'Android', processor:'Octa-core', memory:'128 GB 6 GB RAM', brand:'Huwawei'},
    { id:4, image:oppo, title: "Oppo A94", price: "23,990", os:'Android', processor:'Octa-core', memory:'128GB 8GB RAM', brand:'Oppo'},
  ]
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Products</h1>
      <div className='flex justify-center'>
        <div className=' grid md:grid-cols-4 grid-cols-2 gap-12'>
            {phones.map(phone => (
                <MobileCard
                    key={phone.id} 
                    id={phone.id}
                    image={phone.image}
                    title={phone.title}
                    price={phone.price}
                    os={phone.os}
                    processor={phone.processor}
                    memory={phone.memory}
                    brand={phone.brand}
                />
            ))}

        </div>
      </div>

    </div>
  )
}

export default Products

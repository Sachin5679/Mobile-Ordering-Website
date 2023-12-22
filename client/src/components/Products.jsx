import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MobileCard from './MobileCard';
import iphone from '../assets/images/iphone.jpeg';
import samsungs22 from '../assets/images/samsungs22.jpeg';
import huawei from '../assets/images/huwawei.jpeg';
import oppo from '../assets/images/oppo.jpeg';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const phones = [
    { id: 1, image: iphone, title: "iPhone 14", price: "10000", os: "iOS", processor: 'Hexa-core', memory: '128GB 6GB RAM', brand: 'Apple' },
    { id: 2, image: samsungs22, title: "Galaxy S22", price: "36,999", os: "Android", processor: 'Octa-core', memory: '128 GB 8 GB RAM', brand: 'Samsung' },
    { id: 3, image: huawei, title: "Huawei P30", price: "59,990", os: 'Android', processor: 'Octa-core', memory: '128 GB 6 GB RAM', brand: 'Huawei' },
    { id: 4, image: oppo, title: "Oppo A94", price: "23,990", os: 'Android', processor: 'Octa-core', memory: '128GB 8GB RAM', brand: 'Oppo' },
  ];

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = phones.filter(phone =>
      phone.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchResults(results);
  };

  const displayPhones = searchTerm ? searchResults : phones;

  return (
    <div className='p-10'>
      <div className='flex justify-center space-x-2 mb-11'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-4/5 px-3 py-2 border border-gray-300 rounded-full shadow-xl'
        />
        <button
          onClick={handleSearch}
          className='px-4 py-2 bg-blue-500 shadow-xl text-white rounded-full flex items-center'
        >
          <FontAwesomeIcon icon={faSearch} className='' />
          
        </button>
      </div>

      <div className='flex justify-center'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-12'>
          {displayPhones.map(phone => (
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
  );
};

export default Products;

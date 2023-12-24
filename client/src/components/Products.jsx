import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import MobileCard from './MobileCard';
import iphone from '../assets/images/iphone.jpeg';
import samsungs22 from '../assets/images/samsungs22.jpeg';
import huawei from '../assets/images/huwawei.jpeg';
import oppo from '../assets/images/oppo.jpeg';
import axios from 'axios';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [filters, setFilters] = useState({
    price: '',
    os: [],
    processor: [],
  });
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // const phones = [
  //   { id: 1, image: iphone, title: "iPhone 14", price: 69900, os: "iOS", processor: 'Hexa-core', memory: '128GB 6GB RAM', brand: 'Apple' },
  //   { id: 2, image: samsungs22, title: "Galaxy S22", price: 36999, os: "Android", processor: 'Octa-core', memory: '128 GB 8 GB RAM', brand: 'Samsung' },
  //   { id: 3, image: huawei, title: "Huawei P30", price: 59990, os: 'Android', processor: 'Octa-core', memory: '128 GB 6 GB RAM', brand: 'Huawei' },
  //   { id: 4, image: oppo, title: "Oppo A94", price: 23990, os: 'Android', processor: 'Octa-core', memory: '128GB 8GB RAM', brand: 'Oppo' },
  // ];
  const [phones, setPhones] = useState()
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setPhones(response.data)
      } catch (err) {
        console.error('Error fetching data: ', err)
      }
    }
    fetchData()
  },[])

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = phones.filter(phone =>
      phone.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchResults(results);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const handleFiltersOpen = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const displayPhones = () => {
    let filteredPhones = phones || [];
  
    // Apply search filter
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredPhones = filteredPhones.filter((phone) =>
        phone.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  
    
    if (filters.price) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.price <= parseInt(filters.price)
      );
    }
  
    
    if (filters.os.length > 0) {
      filteredPhones = filteredPhones.filter((phone) =>
        filters.os.includes(phone.os)
      );
    }
  
    // Apply Processor filter
    if (filters.processor.length > 0) {
      filteredPhones = filteredPhones.filter((phone) =>
        filters.processor.includes(phone.processor)
      );
    }
  
    return filteredPhones;
  };

  

  return (
    <div className='p-10'>
      <div className='flex justify-center space-x-2 mb-11'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-3/4 px-3 py-2 border border-gray-300 rounded-full shadow-xl focus:border-blue-500 focus:ring focus:outline-none'
        />
        <button
          onClick={handleSearch}
          className='px-4 py-2 bg-blue-500 shadow-xl text-white rounded-full flex items-center hover:text-blue-500 hover:bg-white transition 3s'
        >
          <FontAwesomeIcon icon={faSearch} className='' />
        </button>
        <button
          onClick={handleFiltersOpen}
          className='px-4 py-2 bg-white shadow-xl text-blue-500 rounded-full flex items-center hover:text-white hover:bg-blue-500 transition 3s'
        >
          <FontAwesomeIcon icon={faFilter} className='' />
        </button>
      </div>

      {showFilterOptions && (
        <div className="mb-4">
          <label className="block mb-2">
            Price Range:
            <input
              type="range"
              min="0"
              max="100000"
              step="100"
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="w-full px-4"
            />
            {filters.price && (
              <span className="text-blue-500">Price: Rs. {filters.price}</span>
            )}
          </label>

          <label className="block mb-2">
            Operating System:
            <select
              multiple
              value={filters.os}
              onChange={(e) =>
                handleFilterChange(
                  'os',
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full border p-2 rounded"
            >
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
            </select>
          </label>

          <label className="block mb-2">
            Processor:
            <select
              multiple
              value={filters.processor}
              onChange={(e) =>
                handleFilterChange(
                  'processor',
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full border p-2 rounded"
            >
              <option value="Hexa-core">HexaCore</option>
              <option value="Octa-core">OctaCore</option>
            </select>
          </label>
        </div>
      )}

      <div className='flex justify-center'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-12'>
          {displayPhones().map(phone => (
            <MobileCard
              key={phone._id}
              id={phone._id}
              image={phone.image}
              title={phone.name}
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

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import MobileCard from './MobileCard';
import axios from 'axios';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const phonesPerPage = 8;

  const [filters, setFilters] = useState({
    price: '',
    os: [],
    processor: [],
  });
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const [phones, setPhones] = useState()
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('https://mobile-ordering-website-api.vercel.app/products', {
          withCredentials: true,
          params: {
            page: currentPage, 
            limit: phonesPerPage, 
            price: filters.price,
            os: filters.os,
            processor: filters.processor,
            searchTerm: searchTerm
          },
        });
        setPhones(response.data.products)
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error('Error fetching data: ', err)
      }
    }
    fetchData()
  },[currentPage, filters, searchTerm])

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = phones.filter(phone =>
      phone.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchResults(results);
  };

  const handleFilterChange = (filterName, value) => {
    setCurrentPage(1);
    setFilters({ ...filters, [filterName]: value });
  };

  const handleFiltersOpen = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleClearFilters = () => {
    setFilters({
      price:'',
      os:[],
      processor:[],
    })
  }

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const displayPhones = () => {
    let filteredPhones = phones || [];
  
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
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button
          onClick={handleFiltersOpen}
          className='px-4 py-2 bg-white shadow-xl text-blue-500 rounded-full flex items-center hover:text-white hover:bg-blue-500 transition 3s'
        >
          <FontAwesomeIcon icon={faFilter} className='' />
        </button>
      </div>

      {showFilterOptions && (
        <div className='md:px-20'>
          <div className="mb-10 bg-slate-300 p-5 rounded-xl shadow-xl">
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
                className="w-full border p-2 rounded-xl shadow-xl"
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
                className="w-full border p-2 rounded-xl shadow-xl"
              >
                <option value="Hexa-core">HexaCore</option>
                <option value="Octa-core">OctaCore</option>
                <option value="Quad-core">QuadCore</option>
              </select>
            </label>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-white shadow-xl text-blue-500 rounded-full flex items-center hover:text-white hover:bg-blue-500 transition 3s"
            >
              Clear Filters
            </button>
          </div>
        </div>

      )}

      <div className='flex justify-center my-4'>
        <button
          onClick={handlePreviousPage}
          className='px-4 py-2 bg-blue-500 text-white rounded-full mr-2'
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className='text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className='px-4 py-2 bg-blue-500 text-white rounded-full ml-2'
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      <div className='flex justify-center items-center w-full h-full'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-12'>
          {displayPhones().length === 0 && (
            <div>
              <p className='text-gray-400 h-screen p-5 text-xl'>No results found. Please adjust your search or filters.</p>
            </div>
            
          )}
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

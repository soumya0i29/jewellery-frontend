import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trending() {
  const [products, setProducts] = useState([]);

  const fetchRandomProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products/random');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching random products:', error);
    }
  };

  useEffect(() => {
    fetchRandomProducts();
  }, []);

  return (
    <div>
        <h1 className='mt-20 font-medium text-[24px] text-center'>Trending On This Week</h1>
    <div className='px-4 md:px-8 lg:px-16'>
      <div className='mt-3 flex flex-wrap items-center justify-center'>
        {products.map((product) => (
          <div key={product._id} className='flex flex-col m-2 p-4 border rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3'>
            <img 
              src={product.image} 
              className='h-[200px] w-full rounded-xl object-cover' 
              alt={product.name} 
            />
            <p className='text-center mt-2 text-sm text-maroon'>{product.tag}</p>
            <h1 className='text-center mt-2 text-lg font-semibold'>{product.name}</h1>
            <p className='text-center mt-1 text-maroon'>${product.price}</p>
            <div className='flex flex-row mt-2'>
              <button className='bg-orange-300 rounded-full w-[48%] px-4 py-2 text-maroon hover:bg-orange-500'>
                Add to Cart
              </button>
              <button className='ml-1 bg-orange-300 rounded-full w-[48%] px-4 py-2 text-maroon hover:bg-orange-500'>
                Quick Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Trending;
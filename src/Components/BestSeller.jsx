import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BestSeller() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data.slice(0, 4)); // Get the first 4 products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='mt-10'>
        <h1 className='font-medium text-[24px] text-center flex-grow
        mb-[-25px]'>Best Sellers</h1>
        <button className=' text-maroon text-sm px-4 py-2 rounded-full shadow hover:bg-orange-300 transition ml-[78%]'>
          View All
        </button>
      <div className='mt-3 flex flex-row flex-wrap mx-2 md:mx-4 lg:mx-8 items-center justify-center'>
        {products.map((product) => (
          <div key={product._id} className='flex flex-col cursor-pointer m-2'>
            <img 
              src={product.image} 
              className='h-[200px] w-[200px] border bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105' 
              alt={product.name} 
            />
            <p className='text-center mt-2 text-sm text-maroon'>{product.tag}</p>
            <p className='text-center mt-1 font-semibold'>{product.name}</p>
            <p className='text-center mt-1 text-maroon'>${product.price}</p>
            <button className='mt-2 bg-orange-300 rounded-full px-4 py-1 text-maroon hover:bg-orange-500'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
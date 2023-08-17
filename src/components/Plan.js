import React from 'react';
import product1 from '../Assets/product1.jpg'
import product2 from '../Assets/product2.jpg'
import product3 from '../Assets/product3.jpg'
import product4 from '../Assets/product4.jpg'

const Plan = () => {
  return (
    <div id='product' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={product2} alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={product1} alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={product3}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={product4} alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={product1} alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Our Upcoming Product</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div >
          <button className='mr-4 bg-[#00df9a] hover:shadow-xl w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Learn More
          </button>
          <button className='bg-[#00df9a] text-white  w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:shadow-xl'>Book Your Order</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
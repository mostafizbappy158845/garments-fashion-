import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='text-white bg-black'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase tracking-widest'>
          welcome to texoma
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Style with Us
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Flexible, Comfort &
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={['Be exclusive', 'Be Devine', 'Be yourself']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>For 80 years, Standard Textile has built a reputation for understanding the unique challenges our customers.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          <Link to="/product">Explore More</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase cursor-pointer'>
        <Link to="/">texoma.</Link>
      </h1>
      <ul className='hidden md:flex text-black font-semibold '>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <Link to="/product">Product</Link>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <Link to="/about">About</Link>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden text-black font-semibold'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-[70%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 uppercase'>
          <Link to="/">texoma.</Link>
        </h1>
        <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to="/">Home</Link></li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to="/product">Product</Link></li>
        <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to="/about">About</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;




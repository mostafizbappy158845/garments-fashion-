import React from 'react';
import Heroimg from '../Assets/Heroimg.jpg'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src={Heroimg} alt="" />
            <div className='bg-black/40 absolute top-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] mx-auto absolute p-4'>
                    <p className='pb-5 font-serif font-bold text-2xl '>WELCOME TO TEXTMAMA</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Style luxury & comfort</h1>
                    <p className='max-w-[600px]  text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nemo debitis quisquam deleniti dicta dolorum provident expedita totam ipsa laboriosam.</p>
                    <button className='bg-[#EC255A] text-white'>Reserve Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
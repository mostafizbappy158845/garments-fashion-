import React from 'react'
import Heroimg from '../Assets/Heroimg.jpg'

const About = () => {
    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>

            <div className='grid lg:grid-cols-2 max-w-[1240px] m-auto'>

                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>

                    <p className='text-2xl uppercase'>why choose us</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Relaxation and satisfaction.</h1>
                    <p className='text-gray py-3'>For 80 years, Standard Textile has built a reputation for understanding the unique challenges our customers.</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Explore More</button>

                </div>
                <div>
                    <img className='w-full' src={Heroimg} alt="/" />
                </div>

            </div>
        </div>
    )
}

export default About
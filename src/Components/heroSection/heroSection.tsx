import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/aliraza.webp'

const HeroSection = () => {
    return (
        <div className='flex flex-row justify-between px-16 h-96 items-center bg-black' id='home'>
            <div className='text-3xl text-white'>
                Hi there, I'm <span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Ali Raza</span>
                <p className='text-2xl'>A Frontend Developer</p>
            </div>
            <div className='p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block mr-24 rotate-[3deg]'>
                <Image src={heroImage} alt='hero image' width={200} height={200} className='rounded-full ' />
            </div>
        </div>
    )
}

export default HeroSection

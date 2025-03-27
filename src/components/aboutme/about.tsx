import React from 'react'
import Men from "@/assets/men.svg"
import Image from 'next/image'
import fahad from "@/assets/Images/fahad.png"

const AboutMe = () => {
    return (
        <div className='w-full flex flex-col justify-center md:items-center md:flex-row gap-7 md:gap-15 px-6'>
            <div className=''>
                <Image src={fahad} alt={"image"} width={500} height={500} className='grayscale border-2 border-gray-200 rounded-2xl' />
            </div>
            <div className='md:w-1/2 w-full'>
                <span className='text-lg md:text-2xl'>About</span>&nbsp;<span className='font-bold text-lg md:text-2xl'>Me</span>
                <p className='mt-2 text-[#71717A]'>
                    I&apos;m Ali Raza, a passionate Frontend Developer with 2 years of experience specializing in HTML, CSS, JavaScript, Reactjs, Nextjs,  Tailwind CSS, Bootstrap, With 2 years of experience, I specialize in building scalable web applications with a strong focus on performance and user experience.
                </p>
                <p className='mt-4 text-[#71717A]'>I&apos;m currently working as a freelancer on Fiverr, delivering high-quality solutions to clients worldwide. My goal is to create intuitive and efficient applications that solve real-world problems.
                </p>
                <p className='mt-4 font-bold '>Skills & Expertise:</p>
                <span className='font-bold'>Frontend:</span>&nbsp;<span className='text-[#71717A]'>ReactJS, Next.js, Tailwind CSS</span><br />
                <span className='font-bold'>Backend:</span>&nbsp;<span className='text-[#71717A]'>Node.js, Express.js, MongoDB</span><br />
                <span className='font-bold'>State Management:</span>&nbsp;<span className='text-[#71717A]'>Redux Toolkit, Zustand</span>
                <p className='text-[#71717A]'>API Development & Integration</p>
                <p className='text-[#71717A]'>Mobile Responsiveness & Performance Optimization</p>
                <p className='mt-4 text-[#71717A]'>I&apos;m always eager to learn and work on challenging projects. Let&apos;s connect and build something amazing!
                </p>
            </div>
        </div>
    )
}

export default AboutMe

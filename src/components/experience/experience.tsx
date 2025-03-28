"use client"
import React, { useState } from 'react'
import Logo from "@/assets/securehops.svg"
import Image from 'next/image'
import Fiverr from "@/assets/fiverr.svg"

const Experience = () => {
    const [showLess, setShowLess] = React.useState(true)
    const ExperienceArray = [
        {
            logo: Logo,
            title: "Frontend Developer",
            description: `I'm a Frontend Developer with 2 years of experience at Securehops, specializing in ReactJS, Next.js, JavaScript, and Tailwind CSS.
                          I have expertise in Material UI, Bootstrap, ShadCN, HTML, and CSS, creating modern and responsive web applications.
                          My focus is on developing intuitive, user- friendly interfaces with a strong emphasis on UI / UX design principles.
                          I ensure cross - browser compatibility, pixel - perfect designs, and smooth user interactions.
                          With a keen eye for performance optimization, I build scalable and maintainable front - end architectures.
                          I have experience working with component - based design systems and reusable UI libraries.
                          Passionate about writing clean, efficient, and well - documented code to enhance maintainability.
                          I stay updated with the latest front - end trends and best practices to improve development workflows.
                          My goal is to deliver high - quality, accessible, and interactive web experiences for users.
                          I'm always eager to learn, adapt, and collaborate in a dynamic development environment.`,
            employmentPeriod: "Jan 2023 - Jan 2025",
            width: 150,
            height: 150
        },
        {
            logo: Fiverr,
            title: "Full Stack Developer",
            description: "I'm a Full Stack Developer on Fiverr, specializing in ReactJS, Next.js, JavaScript, Node.js, Express.js, and MongoDB. I design and develop scalable web applications with modern UI/UX, ensuring high performance and seamless user experiences. With expertise in both frontend and backend, I build dynamic, responsive, and secure applications. I am committed to delivering clean, maintainable code and optimizing workflows for efficient development. My goal is to create high-quality digital solutions tailored to client needs.",
            employmentPeriod: "Jan 2025 - Present",
            width: 40,
            height: 40
        },
    ]

    return (
        <>
            <div className='bg-black py-5 md:py-10 px-6'>
                <div className='flex flex-col gap-10'>
                    <div className='flex  justify-center'>
                        <span className='text-white text-xl md:text-4xl'>My</span>&nbsp;&nbsp;&nbsp; <span className='font-bold text-white text-xl md:text-4xl '>Experience</span>
                    </div>
                    {
                        ExperienceArray.map((item, index) => (
                            <div key={index} className='border rounded-xl flex flex-col p-5 hover:bg-white/20 hover:border-white/15 hover:border-none'>
                                <div className='flex justify-between md:items-center gap-3'>
                                    <div className='flex flex-col md:flex-row gap-3 md:gap-5 pt-[0.5] pb-3 md:py-3 md:items-center'>
                                        <Image src={item.logo} alt={'logo/Image'} width={item.width} height={item.height} className='fill-white' />
                                        <span className='text-white text-xl font-semibold cursor-default'>{item.title}</span>
                                    </div>
                                    <div>
                                        <span className='text-[#D4D4D8] cursor-default'>{item.employmentPeriod}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[#D4D4D8] cursor-default' >{showLess ? `${item.description.substring(0, 200)}...` : item.description}</span>
                                    <button
                                        className='text-blue-400 ml-2 cursor-pointer'
                                        onClick={() => setShowLess(!showLess)}
                                    >
                                        {showLess ? "read more" : "show less"}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Experience

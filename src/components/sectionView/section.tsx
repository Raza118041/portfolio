import React from 'react'
import Me from "@/assets/me.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import fahad from "@/assets/Images/fahad.png"

const Section = () => {
    const linksICons = [
        {
            image: <FaGithub />, href: "https://github.com/Raza118041"
        },
        {
            image: <FaLinkedin />, href: "https://www.linkedin.com/in/ali-raza-2a359a242"
        },
    ]
    return (
        <div className='px-6 py-10 flex flex-col-reverse md:flex-row items-center relative'>
            {/* Left Side  */}
            <div className='md:w-1/2 space-y-5'>
                <div className='text-2xl md:text-5xl md:leading-20 leading-12'>
                    <span className=''>Hello I&apos;m</span> <span className='font-bold'>Ali Raza</span><br />
                    <span className='font-bold'>Frontend</span> <span>Developer</span><br />
                    <span>Based In Pakistan</span>
                </div>
                <span className=''>Ali Raza is a passionate Frontend Developer with expertise in ReactJS, Next.js, and JavaScript. He specializes in building responsive, high-performance, and user-friendly web applications. With a strong understanding of Redux, Tailwind CSS, and modern UI/UX principles, he ensures seamless user experiences. Ali is proficient in handling API integrations, state management, and optimizing web performance. He is always eager to learn new technologies and improve his skills to develop scalable and efficient web solutions.</span>
                <div className='flex flex-row gap-5 py-4'>
                    {
                        linksICons.map((item, index) => (
                            <div key={index} className='p-2 rounded-xl border-2 border-black hover:bg-black hover:text-white'>
                                <Link href={item.href} className='text-2xl'>{item.image}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Right Side  */}
            <div className='lg:absolute right-0'>
                <Image src={fahad} alt={"image"} className='grayscale' />
            </div>
        </div>
    )
}

export default Section

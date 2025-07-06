import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About', path: '#' },
        { name: 'Tech Stack', path: '#techstack' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#' },

    ]
    const socialLinks = [
        { icon: FaGithub, path: 'https://github.com/Raza118041' },
        { icon: FaLinkedin, path: 'https://www.linkedin.com/in/ali-raza-2a359a242' },
    ]
    return (
        <div className='flex justify-between p-7 flex-row items-center'>
            <div>
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Ali Raza</span>
            </div>
            <div className='flex flex-row gap-6'>
                {
                    navLinks.map((link, index) => (
                        <div key={index}>
                            <Link href={link.path}>{link.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-row gap-3'>
                {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                        <div key={index} >
                            <Link href={link.path} target='_blank'>
                                <Icon size={26}></Icon>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar

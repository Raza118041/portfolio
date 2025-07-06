import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '#' },
        { name: 'About', path: '#' },
        { name: 'Tech Stack', path: '#' },
        { name: 'Projects', path: '#' },
        { name: 'Contact', path: '#' },

    ]
    const socialLinks = [
        { icon: FaGithub, path: 'https://github.com/Raza118041' },
        { icon: FaLinkedin, path: 'https://www.linkedin.com/in/ali-raza-2a359a242' },
    ]
    return (
        <div className='flex justify-between p-7 flex-row items-center'>
            <div>
                <span>Ali Raza</span>
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
                            <Link href={link.path}>
                                <Icon size={24}></Icon>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar

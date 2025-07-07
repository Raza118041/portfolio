"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About', path: '/about' },
        { name: 'Tech Stack', path: '#techstack' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ]

    const socialLinks = [
        { icon: FaGithub, path: 'https://github.com/Raza118041' },
        { icon: FaLinkedin, path: 'https://www.linkedin.com/in/ali-raza-2a359a242' },
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => {
            const next = !prev;
            if (next) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return next;
        });
    };


    return (
        <nav className="flex justify-between items-center p-7 bg-black text-white">
            <span className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Ali Raza
            </span>
            <div className="hidden md:flex flex-row gap-6">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className="hover:text-purple-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex flex-row gap-3">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                        <Link
                            key={index}
                            href={link.path}
                            target="_blank"
                            className="hover:text-purple-400 transition-colors"
                        >
                            <Icon size={26} />
                        </Link>
                    )
                })}
            </div>
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full h-screen bg-gray-900 flex-col items-center gap-10 flex justify-center md:hidden z-100">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="text-lg hover:text-purple-400 transition-colors"
                            onClick={toggleMobileMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-row gap-4 mt-4">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon
                            return (
                                <Link
                                    key={index}
                                    href={link.path}
                                    target="_blank"
                                    className="hover:text-purple-400 transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    <Icon size={26} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
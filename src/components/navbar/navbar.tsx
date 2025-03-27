"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const navLinks = [
        {
            link: "About Me",
        },
        {
            link: "Skills",
        },
        {
            link: "Project",
        },
        {
            link: "Contact Me",
        },
    ]

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto"; // Reset on unmount
        };
    }, [isOpen]);
    return (
        <nav className='sticky top-0 z-50 w-full h-full bg-white md:bg-white/20 md:backdrop-blur-[30px]'>
            <div className='flex justify-between flex-row p-5 items-center'>
                <div>
                    <span className={`font-bold text-lg md:text-xl`}>Ali Raza</span>
                </div>
                <div className='md:flex flex-row gap-5 hidden'>
                    {
                        navLinks.map((item, index) => (
                            <div key={index}>
                                <span className='cursor-pointer'>{item.link}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='md:flex hidden group text-white'>
                    <Link href={"/Resume.pdf"} download={"Ali_Raza_CV.pdf"}>
                        <Button className='cursor-pointer'>
                            Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 28 28"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </Button>
                    </Link>
                </div>
                <div className='md:hidden flex'>
                    <button className='focus:outline-none' onClick={handleClick}>
                        {!isOpen && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>


                </div>
            </div>
            <div className={`md:hidden fixed top-0 z-50 w-full h-full bg-white/20 shadow-sm backdrop-blur-[18px] transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500 ease-in-out`}>
                <button className='absolute right-5 top-5' onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className='flex flex-col h-screen justify-center items-center space-y-6 gap-5 md:hidden'>
                    {
                        navLinks.map((item, index) => (
                            <div key={index}>
                                <span className='cursor-pointer'>{item.link}</span>
                            </div>
                        ))
                    }
                    <Link href={"/Resume.pdf"} download={"Ali_Raza_CV.pdf"}>
                        <Button className='cursor-pointer flex items-center'>
                            Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 32 32"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

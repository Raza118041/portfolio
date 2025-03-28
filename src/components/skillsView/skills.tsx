import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";
import { SiShadcnui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";


const SkillView = () => {
    const skillsArray = [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <DiCss3 />,
            name: "CSS",
        },
        {
            icon: <FaReact />,
            name: "ReactJS",
        },
        {
            icon: <RiNextjsFill />,
            name: "NextJS",
        },
        {
            icon: <FaNode />,
            name: "NodeJS",
        },
        {
            icon: <SiExpress />,
            name: "ExpressJS",
        },
        {
            icon: <IoLogoJavascript />,
            name: "JavaScript",
        },
        {
            icon: <DiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <RiTailwindCssFill />,
            name: "Tailwind CSS",
        },
        {
            icon: <GiMaterialsScience />,
            name: "Material UI",
        },
        {
            icon: <SiShadcnui />,
            name: "ShadCN",
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap",
        },
        {
            icon: <FaTrello />,
            name: "Trello",
        }
    ]
    return (
        <>
            <div className='flex justify-center'>
                <span className='text-xl md:text-4xl'>My&nbsp;</span><span className='font-bold text-xl md:text-4xl'>Skills</span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10 px-6'>
                {
                    skillsArray.map((item, index) => (
                        <div className='border md:border-2 border-black flex cursor-pointer hover:bg-black hover:text-white justify-center flex-col items-center py-8 md:py-12 gap-5' key={index}>
                            <span className='text-4xl md:text-7xl'>{item.icon}</span>
                            <span className='text-lg md:text-xl'>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SkillView

import Image from 'next/image'
import React from 'react'
import Femclinic from "@/assets/Images/femclinic.png"
import RubNGub from "@/assets/Images/rubngub.png"
import CodeSprint from "@/assets/Images/codesprint.png"
import Tokenty from "@/assets/Images/tokenty.png"
import NavigateImage from "@/assets/navigate_icon.svg"
import Link from 'next/link'

const Project = () => {
    const projects = [
        {
            image: Femclinic,
            projectNumber: "01",
            projectTitle: "Femclinic",
            projectDescription: "lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22",
            navigateImage: NavigateImage,
            href: "https://femclinic.io/"
        },
        {
            image: RubNGub,
            projectNumber: "02",
            projectTitle: "RubNGub",
            projectDescription: "lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22",
            navigateImage: NavigateImage,
            href: "https://rubngub.com/"
        },
        {
            image: CodeSprint,
            projectNumber: "03",
            projectTitle: "CodeSprint",
            projectDescription: "lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22",
            navigateImage: NavigateImage,
            href: "https://codesprint.site/"
        },
        {
            image: Tokenty,
            projectNumber: "04",
            projectTitle: "Tokenty",
            projectDescription: "lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22lorem22",
            navigateImage: NavigateImage,
            href: "https://tokenty.vercel.app/"
        },
    ]
    return (
        <div className='bg-black w-full py-16 px-6 text-center'>
            <div className='flex gap-10 flex-col'>
                <div>
                    <span className='text-white text-xl md:text-4xl'>My</span>&nbsp;<span className='font-bold text-white text-xl md:text-4xl'>Projects</span>
                </div>
                {
                    projects.map((item, index) => (
                        <div key={index} className={`flex flex-col w-full md:flex-row gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className='w-full md:w-1/2'>
                                <Image src={item.image} alt={"image"} width={200} height={200} className='h-auto border border-white/20 w-full object-contain rounded-xl' />
                            </div>
                            <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                                <p className='text-white font-bold text-xl'>{item.projectNumber}</p>
                                <p className='text-white'>{item.projectTitle}</p>
                                <Link href={item.href}>
                                    <Image src={item.navigateImage} alt='image' width={15} height={15} className='cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Project

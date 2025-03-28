import Image from 'next/image'
import React from 'react'
import Femclinic from "@/assets/Images/femclinic.png"
import RubNGub from "@/assets/Images/rubngub.png"
import CodeSprint from "@/assets/Images/codesprint.png"
import Tokenty from "@/assets/Images/tokenty.png"
import ShopNGrab from "@/assets/Images/shopNgrab.png"
import NavigateImage from "@/assets/navigate_icon.svg"
import Link from 'next/link'

const Project = () => {
    const projects = [
        {
            image: Femclinic,
            projectNumber: "01",
            projectTitle: "Femclinic",
            projectDescription: "Femclinic is an online healthcare platform built with Java, Next.js, and MongoDB, designed to simplify the appointment booking process with doctors. The website allows users to browse doctor profiles, check availability, and schedule appointments seamlessly. It features Calendly integration, enabling users to book appointments effortlessly at their preferred time. With a user-friendly interface, Femclinic ensures a smooth and hassle-free experience for both patients and healthcare professionals.",
            navigateImage: NavigateImage,
            href: "https://femclinic.io/"
        },
        {
            image: RubNGub,
            projectNumber: "02",
            projectTitle: "RubNGub",
            projectDescription: "RubNGub is an eCommerce platform built with NestJS, Next.js, and PostgreSQL, offering a range of organic products, including ghee, shampoo, oil, and honey. Users can browse high-quality natural products and place orders online with ease. The website ensures a seamless shopping experience with secure payment options and fast delivery. Designed for convenience, RubNGub provides customers with access to pure and chemical-free essentials from the comfort of their homes.",
            navigateImage: NavigateImage,
            href: "https://rubngub.com/"
        },
        {
            image: CodeSprint,
            projectNumber: "03",
            projectTitle: "CodeSprint",
            projectDescription: "CodeSprint is a Lahore-based software company specializing in innovative digital solutions. The company's website showcases its services, including web and mobile app development, custom software solutions, and IT consulting. Built using Next.js, Node.js, MongoDB, and Express.js, CodeSprint delivers high-quality, scalable, and efficient software products. The website provides insights into the company's expertise, portfolio, and client success stories.",
            navigateImage: NavigateImage,
            href: "https://codesprint.site/"
        },
        {
            image: Tokenty,
            projectNumber: "04",
            projectTitle: "Tokenty",
            projectDescription: "Tokenty is a platform for creating and managing smart contracts, enabling users to tokenize assets and automate transactions securely. It allows creators to set up royalty mechanisms, ensuring they earn a percentage from future resales of their digital assets. Built using Next.js, Node.js, and MongoDB, Tokenty simplifies the process of deploying and managing smart contracts without extensive coding knowledge.",
            navigateImage: NavigateImage,
            href: "https://tokenty.vercel.app/"
        },
        {
            image: ShopNGrab,
            projectNumber: "05",
            projectTitle: "ShopNGrab",
            projectDescription: "ShopnGrab is an eCommerce platform offering a wide range of products, including computer accessories, kids' products, and electronics. Built using Next.js, Node.js, Express.js, and MongoDB, it provides a seamless shopping experience with a fast and secure backend. The platform ensures smooth navigation, efficient product management, and a user-friendly interface. With optimized performance and scalability, ShopnGrab delivers a modern online shopping solution.",
            navigateImage: NavigateImage,
            href: "https://tokenty.vercel.app/"
        },
    ]
    return (
        <div className='bg-black w-full py-5 md:py-10 px-6 text-center'>
            <div className='flex gap-10 flex-col'>
                <div>
                    <span className='text-white text-xl md:text-4xl'>My</span>&nbsp;<span className='font-bold text-white text-xl md:text-4xl'>Projects</span>
                </div>
                {
                    projects.map((item, index) => (
                        <div key={index} className={`flex flex-col w-full items-center md:flex-row gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className='w-full md:w-1/2'>
                                <Image src={item.image} alt={"image"} width={200} height={200} className='h-auto border border-white/20 w-full object-contain rounded-xl' />
                            </div>
                            <div className='flex flex-col items-start gap-1 w-full md:w-1/2'>
                                <p className='text-white font-bold text-xl'>{item.projectNumber}</p>
                                <p className='text-white font-semibold'>{item.projectTitle}</p>
                                <p className='text-gray-300 break-words text-start overflow-wrap w-full'>{item.projectDescription}</p>
                                <Link href={item.href}>
                                    <Image src={item.navigateImage} alt='image' width={18} height={18} className='cursor-pointer mt-2' />
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

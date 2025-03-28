import React from 'react'
import Arham from "@/assets/Images/arham.jpeg"
import Sultan from "@/assets/Images/sultan.jpeg"
import Zain from "@/assets/Images/zain.jpeg"
import Ashraf from "@/assets/Images/ashraf.jpeg"
import Dimos from "@/assets/Images/dimos.png"
import {
    Card
} from "@/components/ui/card"
import Image from 'next/image'

const MyTestimonial = () => {
    const cards = [
        {
            image: Arham,
            description: "Working with Arham Sarwar at Securehops was a great experience. He is a talented and supportive senior developer who is always ready to guide and share his knowledge. His problem-solving approach and teamwork are truly inspiring. It was a valuable learning experience to work with him!",
            name: "Arham Sarwar",
            designation: "Senior Developer"
        },
        {
            image: Zain,
            description: "Working with Zain Ul Abideen at Securehops was a great experience. He is a talented and supportive senior developer who is always ready to guide and share his knowledge. His problem-solving approach and teamwork are truly inspiring. It was a valuable learning experience to work with him!",
            name: "Zain Ul Abideen",
            designation: "Full Stack Developer"
        },
        {
            image: Sultan,
            description: "Working with Sultan at Securehops was a great experience. He is a talented and supportive senior developer who is always ready to guide and share his knowledge. His problem-solving approach and teamwork are truly inspiring. It was a valuable learning experience to work with him!",
            name: "Sultan",
            designation: "Senior IOS Developer"
        },
        {
            image: Ashraf,
            description: "Working with Ashraf Ali at Securehops was a great experience. He is a talented and supportive senior developer who is always ready to guide and share his knowledge. His problem-solving approach and teamwork are truly inspiring. It was a valuable learning experience to work with him!",
            name: "Ashraf Ali",
            designation: "MERN Stack Developer"
        },
        {
            image: Dimos,
            description: "Working with Dimos was an excellent experience. He provided clear instructions and valuable insights throughout the project. I had the opportunity to work on React Native under his guidance, which helped me enhance my skills. His professionalism and cooperative nature made the collaboration smooth and productive.",
            name: "Dimos Vamvourellis",
            designation: "Client (Fiverr)"
        },
    ]
    return (
        <div className=''>
            <div className='flex justify-center'>
                <span className='text-xl md:text-4xl'>My</span>&nbsp;<span className='font-bold text-xl md:text-4xl'>Testimonial</span>
            </div>
            <div className='py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    cards.map((item, index) => (
                        <div className='flex justify-center mx-4' key={index}>
                            <Card className="w-[350px] shadow-xl hover:bg-black cursor-pointer hover:text-white">
                                <div className='w-full flex flex-col p-5 gap-2 justify-center items-center text-center grayscale'>
                                    <Image src={item.image} alt='' width={60} height={60} className='rounded-full bg-gray-300 p-[3] grayscale text-center' style={{ backgroundColor: '#D3D3D3' }} />
                                    <p>{item.description}</p>
                                    <hr className='w-52 my-4 border' />
                                    <span className='font-bold'>{item.name}</span>
                                    <span className=''>{item.designation}</span>
                                </div>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyTestimonial

import React from 'react'
import Me from "@/assets/me.svg"
import Image from 'next/image'

const Section = () => {
    return (
        <div className='px-6 py-10 flex flex-col-reverse md:flex-row items-center relative'>
            {/* Left Side  */}
            <div className='md:w-1/2 space-y-5'>
                <div className='text-2xl md:text-5xl md:leading-20 leading-12'>
                    <span className=''>Hello I'm</span> <span className='font-bold'>Ali Raza</span><br />
                    <span className='font-bold'>Frontend</span> <span>Developer</span><br />
                    <span>Based In Pakistan</span>
                </div>
                <span className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et iure voluptas voluptate atque enim asperiores deserunt unde. Quas neque at suscipit, alias architecto saepe cumque explicabo vel culpa! Officiis saepe molestias soluta veritatis odit eligendi consectetur facere reprehenderit nihil libero aliquam pariatur ipsam ipsa voluptatibus, commodi perferendis quis vero placeat at non voluptatum aliquid nisi voluptatem! Ex, provident voluptatum ad repellendus atque quia fugiat delectus error quasi pariatur perspiciatis iste minima cumque optio. Aperiam et, tempore consequuntur assumenda a quae. Tempore obcaecati asperiores inventore possimus eum dolorem consequuntur magni quo, pariatur quidem molestiae sed eligendi voluptatem perferendis nostrum nihil.</span>
            </div>
            {/* Right Side  */}
            <div className='lg:absolute right-0'>
                <Image src={Me} alt={"image"} />
            </div>
        </div>
    )
}

export default Section

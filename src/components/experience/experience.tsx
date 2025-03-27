import React from 'react'

const Experience = () => {
    const ExperienceArray = [
        {
            logo: "logo",
            title: "Frontend Developer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et iure voluptas voluptate atque enim asperiores deserunt unde. Quas neque at suscipit, alias architecto saepe cumque explicabo vel culpa! Officiis saepe molestias soluta veritatis odit eligendi consectetur facere reprehenderit nihil libero aliquam pariatur ipsam ipsa voluptatibus, commodi perferendis quis vero placeat at non voluptatum aliquid nisi voluptatem! Ex, provident voluptatum ad repellendus atque quia fugiat delectus error quasi pariatur perspiciatis iste minima cumque optio. Aperiam et, tempore consequuntur assumenda a quae. Tempore obcaecati asperiores inventore possimus eum dolorem consequuntur magni quo, pariatur quidem molestiae sed eligendi voluptatem perferendis nostrum nihil.",
            workingDate: "Jan 2023 - Jan 2025"
        },
        {
            logo: "logo",
            title: "Fiverr",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et iure voluptas voluptate atque enim asperiores deserunt unde. Quas neque at suscipit, alias architecto saepe cumque explicabo vel culpa! Officiis saepe molestias soluta veritatis odit eligendi consectetur facere reprehenderit nihil libero aliquam pariatur ipsam ipsa voluptatibus, commodi perferendis quis vero placeat at non voluptatum aliquid nisi voluptatem! Ex, provident voluptatum ad repellendus atque quia fugiat delectus error quasi pariatur perspiciatis iste minima cumque optio. Aperiam et, tempore consequuntur assumenda a quae. Tempore obcaecati asperiores inventore possimus eum dolorem consequuntur magni quo, pariatur quidem molestiae sed eligendi voluptatem perferendis nostrum nihil.",
            workingDate: "Jan 2025 - Present"
        },
    ]
    return (
        <>
            <div className='bg-black py-10'>
                <div className='flex  justify-center pb-10'>
                    <span className='text-white text-center text-xl md:text-4xl'>My</span>&nbsp;&nbsp;&nbsp; <span className='font-bold text-white text-xl md:text-4xl '>Experience</span>
                </div>

                <div className='px-6 flex gap-7 flex-col'>
                    {
                        ExperienceArray.map((item, index) => (
                            <div key={index} className='border rounded-xl flex flex-col p-5'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-row gap-5 py-3'>
                                        <span className='text-white'>{item.logo}</span>
                                        <span className='text-white'>{item.title}</span>
                                    </div>
                                    <div>
                                        <span className='text-white'>{item.workingDate}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-white/60'>{item.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Experience

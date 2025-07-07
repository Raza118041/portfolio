import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"


const Project = () => {
    const projects = [
        { name: "Femclinic", description: "Femclinic is a modern healthcare platform that allows patients to book online appointments and virtual consultations with doctors. It features professional midwives and ensures accessible, expert care for women from the comfort of their homes.", techStack: "Nextjs, JavaScript, Tailwind CSS, Java, Swagger" },
        { name: "RubnGub", description: "RubnGub is an online store designed like an e-commerce platform, offering a wide range of high-quality organic foods. Users can conveniently browse and purchase natural, chemical-free products focused on health and wellness.", techStack: "Nextjs, JavaScript, Tailwind CSS, Nest.js, MongoDB" },
        { name: "CodeSprint", description: "CodeSprint is a software development company with a dedicated career portal where users can explore and apply for exciting job opportunities. The platform connects talented professionals with roles in tech, development, and innovation, streamlining the recruitment process.", techStack: "Nextjs, JavaScript, Tailwind CSS, Nest.js, MongoDB" },
        { name: "Tokenty", description: "", techStack: "Nextjs, JavaScript, Tailwind CSS, MongoDB, Nest.js" },
        { name: "Zee Power Solution", description: "Zee Power Solution is a shop-based website that gives users full control through an Excel-powered system. Users can easily manage and display their computer accessories inventory on the website by updating a simple spreadsheet, making product management effortless and efficient.", techStack: "Nextjs, JavaScript, Tailwind CSS" },
        { name: "Job Finder", description: "Job Finder is a frontend website featuring fully static content. It serves as a clean and responsive interface for showcasing job listings without dynamic functionality.", techStack: "Nextjs, JavaScript, Tailwind CSS" },
        { name: "Chat Bot", description: "Chatbot is an AI-powered tool similar to ChatGPT, specifically trained for a custom task using the Hugging Face API. It provides intelligent and context-aware responses tailored to meet specific user needs.", techStack: "Nextjs, JavaScript, Tailwind CSS, Hugging Face" },
    ]
    return (
        <div className="mx-auto max-w-7xl px-5 py-16" id="projects">
            <h2 className="text-4xl font-bold text-center mb-3">Projects</h2>
            <p className='text-center mb-12'>Technologies I’ve been working with recently</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition duration-300 gap-1">
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-lg font-semibold mb-1">{project.name}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">{project.description || "No description available."}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-medium">
                                Tech Stack:
                                <span className="text-gray-500 font-normal"> {project.techStack}</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Project

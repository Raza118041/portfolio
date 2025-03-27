"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";


const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters").max(50),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    website: z.string().optional(),
    message: z.string().min(10, "Message should be at least 10 characters")
});

const Email = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "", email: "", website: "", message: "" },
    });


    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data);
    };

    const linksICons = [
        {
            image: <FaGithub />, href: "https://github.com/Raza118041"
        },
        {
            image: <FaLinkedin />, href: "https://www.linkedin.com/in/ali-raza-2a359a242"
        },
    ]

    return (
        <div className="flex flex-row items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/2 px-6 gap-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your website (If exists)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Type your message here..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex flex-row gap-5 py-4 items-center'>
                        <Button type="submit" className="py-6 px-10">Get In Touch</Button>
                        {
                            linksICons.map((item, index) => (
                                <div key={index} className='p-2 rounded-xl border-2 border-black hover:bg-black hover:text-white'>
                                    <Link href={item.href} className='text-2xl'>{item.image}</Link>
                                </div>
                            ))
                        }
                    </div>
                </form>
                <div className="py-4 px-6">
                </div>
            </Form>
            <div >
                <span className="font-extrabold text-3xl">Let's talk for </span><br />
                <span className="font-extrabold text-3xl">Something special</span><br />
                <span className="pt-4 flex">{"Have a project in mind? Let’s discuss how we can bring it to life together"}</span>
                {/* </div> */}
                <span className="font-bold mt-3 flex">
                    aliraza118041@gmail.com
                </span>
                <span className="font-bold flex">
                    +923011339381
                </span>
            </div>
        </div>
    );
};

export default Email;

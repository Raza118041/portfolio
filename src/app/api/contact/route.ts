import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const { username, email, website, message } = await req.json()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Important: New Message from ${username} via Contact Form`,
            text: `Name: ${username}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`
        };
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })


    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
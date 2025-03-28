import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    // try {
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
    const info = await transporter.sendMail(mailOptions)
    if (info && info.messageId) {
        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 })
    } else {
        return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 })

    }
}
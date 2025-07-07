// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = formSchema.parse(body);

    await resend.emails.send({
      from: '<onboarding@resend.dev>',
      to: 'aliraza118041@gmail.com',
      subject: `New Contact Form - ${data.subject}`,
      html: `
        <h3>New Message from ${data.firstName} ${data.lastName}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten().fieldErrors }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

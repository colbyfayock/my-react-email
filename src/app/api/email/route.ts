import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@/src/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email } = await request.json();

  try {
    await resend.sendEmail({
      from: process.env.MAIL_FROM || '',
      to: email,
      subject: 'hello world',
      react: WelcomeEmail({
        firstName
      })
    });
    return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
  

}
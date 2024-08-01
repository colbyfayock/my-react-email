import { Resend } from 'resend';

import { SpaceJellyLoginCodeEmail } from '@/emails/login';

const resend = new Resend(String(process.env.RESEND_API_KEY));

export async function POST(request: Request) {
  const { validationCode, email } = await request.json();

  const results = await resend.emails.send({
    from: String(process.env.FROM_EMAIL),
    to: email,
    subject: 'Your Space Jelly Login Code',
    react: SpaceJellyLoginCodeEmail({
      validationCode
    })
  });

  return Response.json({
    data: results
  });
}
import { SESClient } from '@aws-sdk/client-ses';
import * as aws from '@aws-sdk/client-ses';
import * as nodemailer from 'nodemailer';

const fromMail = 'no-reply@deschutesdesigngroup.com';

async function createTransporter() {
  if (
    !process.env.DDG_AWS_ACCESS_KEY ||
    process.env.NODE_ENV === 'development'
  ) {
    console.log('📧 Using Ethereal Email for local testing...');
    const testAccount = await nodemailer.createTestAccount();

    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  const sesClient = new SESClient({
    region: 'us-west-2',
    credentials: {
      accessKeyId: process.env.DDG_AWS_ACCESS_KEY,
      secretAccessKey: process.env.DDG_AWS_SECRET_ACCESS_KEY,
    },
  });

  return nodemailer.createTransport({
    SES: { ses: sesClient, aws: aws },
  });
}

export const sendContactFormMessage = async (name, email, message) => {
  try {
    const transporter = await createTransporter();

    const response = await transporter.sendMail({
      from: fromMail,
      to: 'info@deschutesdesigngroup.com',
      subject: 'New Contact Us Form Submission',
      replyTo: email,
      html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<div style="max-width: 500px;">
<h2>New Contact Us Form Submission</h2>
<p>
Name: ${name} <br/>
Email: ${email} <br/>
Message: ${message} <br/>
</p>
</div>
</body>
</html>
`,
    });

    if (
      !process.env.DDG_AWS_ACCESS_KEY ||
      process.env.NODE_ENV === 'development'
    ) {
      const previewUrl = nodemailer.getTestMessageUrl(response);
      console.log('📬 Preview email:', previewUrl);
      console.log('✅ Email sent successfully!');
    }

    return response?.messageId
      ? { ok: true }
      : { ok: false, msg: 'Failed to send email' };
  } catch (error) {
    console.error('Failed to send email', error.message);
    return { ok: false, msg: 'Failed to send email' };
  }
};

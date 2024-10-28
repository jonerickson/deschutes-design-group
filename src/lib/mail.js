import * as AWS from 'aws-sdk';
import * as nodemailer from 'nodemailer';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
});

AWS.config.getCredentials(function (error) {
  if (error) {
    console.error('Failed to configure AWS credentials', error.stack);
  }
});

const fromMail = 'no-reply@deschutesdesigngroup.com';
const ses = new AWS.SES({ apiVersion: '2010-12-01' });
const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendContactFormMessage = async (name, email, message) => {
  try {
    const response = await transporter.sendMail({
      from: fromMail,
      to: 'info@deschutesdesigngroup.com',
      subject: 'New Contact Us Form Submission',
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
    return response?.messageId
      ? { ok: true }
      : { ok: false, msg: 'Failed to send email' };
  } catch (error) {
    console.error('Failed to send email', error.message);
    return { ok: false, msg: 'Failed to send email' };
  }
};

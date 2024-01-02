// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const {postData} = req.body;

  // Ensure you have the correct email user and password
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    return res.status(500).json({ success: false, error: 'Email credentials are missing.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: postData.email, // Use the user's email as the sender
    to: emailUser, // Send the email to your designated recipient
    subject: 'New Contact Form Submission',
    html: `
      <p>Contact On: ${postData.ContactOn}</p>
      <p>Project: ${postData.Project}</p>
      <p>Description: ${postData.Description}</p>
      <p>Name: ${postData.name}</p>
      <p>Email: ${postData.email}</p>
      <p>Date: ${postData.Date}</p>
      <p>Description: ${postData.Discription}</p>
      <p>Company: ${postData.Company}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Nodemailer Error:', error.message);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}


    
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Outlook SMTP server
      port: 587, // Port for TLS/STARTTLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.OUTLOOK_EMAIL, // Your Outlook email
        pass: process.env.OUTLOOK_PASSWORD, // Your Outlook password
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false, // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error
      },
    });

    const mailOptions = {
      from: process.env.OUTLOOK_EMAIL, // Sender address
      to,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };

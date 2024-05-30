const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
    const { senderMail, subject, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.OUTLOOK_EMAIL,
                pass: process.env.OUTLOOK_PASSWORD,
            },
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: process.env.OUTLOOK_EMAIL,
            to: process.env.OUTLOOK_EMAIL,
            replyTo: senderMail,
            subject: subject,
            text: message,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
};

module.exports = { sendEmail };

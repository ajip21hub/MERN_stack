const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

//   console.log(transporter);
  
  router.post('/send-email', async (req, res) => {
    const { email, date, description } = req.body;
  
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Test1 LNK',
    //   text: `Date: ${date} \n Description: ${description}`,
        text:'Hi Salam kenal'
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
      res.status(500).json({ message: 'An error occurred while sending the email' });
    }
  });
  
  module.exports = router;
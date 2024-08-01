const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Mail = require('../models/Mail')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

//   console.log(transporter);
  
//Create Mail data and send email
  router.post('/send-email', async (req, res) => {
    const { email, date, description } = req.body;

    const mail = new Mail({
      email: req.body.email,
      date: req.body.date,
      description: req.body.description,
    });

    try {
      const newMail = await mail.save();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  
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

  // Routes Mail CRUD
  router.get('/mails', async (req, res) => {
    try {
      const mails = await Mail.find();
      res.json(mails);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get('/mails/:id', async (req, res) => {
    try {
      const mail = await Mail.findById(req.params.id);
      if (!mail) return res.status(404).json({ message: 'Mail not found' });
      res.json(mail);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/mails/email/:email', async (req, res) => {
    try {
      const mail = await Mail.findOne({email:req.params.email});
      // console.log(req.params);
      if (!mail) return res.status(404).json({ message: 'Mail not found' });
      res.json(mail);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // app.post('/mails', async (req, res) => {
  //   const mail = new Mail({
  //     email: req.body.email,
  //     date: req.body.date,
  //     description: req.body.description,
  //   });
  
  //   try {
  //     const newMail = await mail.save();
  //     res.status(201).json(newMail);
  //   } catch (err) {
  //     res.status(400).json({ message: err.message });
  //   }
  // });
  
  router.put('/mails/:id', async (req, res) => {
    try {
      const mail = await Mail.findById(req.params.id);
      if (!mail) return res.status(404).json({ message: 'Mail not found' });
  
      mail.email = req.body.email || mail.email;
      mail.date = req.body.date || mail.date;
      mail.description = req.body.description || mail.description;
  
      const updatedMail = await mail.save();
      res.json(updatedMail);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.delete('/mails/:id', async (req, res) => {
    try {
      const mail = await Mail.findById(req.params.id);
      if (!mail) return res.status(404).json({ message: 'Mail not found' });
  
      await mail.remove();
      res.json({ message: 'Mail deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

  
  module.exports = router;
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get('/', (req, res) => {
  res.send({ status: 'ok', message: 'Inquiry API is running' });
});

app.post('/api/inquiry', async (req, res) => {
  const { name, email, subject, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.TO_EMAIL,
    subject: subject || service || `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service || 'Not selected'}\n\nMessage:\n${message}`,
    replyTo: email,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    return res.json({ success: true, message: 'Inquiry email sent' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send inquiry email' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.TO_EMAIL,
    subject: `New newsletter signup: ${email}`,
    text: `A new newsletter signup has been received:\n\nEmail: ${email}`,
    replyTo: email,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    return res.json({ success: true, message: 'Subscription email sent' });
  } catch (error) {
    console.error('Subscription send error:', error);
    return res.status(500).json({ error: 'Failed to send subscription email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const nodemailer = require('nodemailer');
const path = require('path');

const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const getLogoAttachment = () => ({
  filename: 'logo.png',
  path: path.join(__dirname, 'assets/logo.png'),
  cid: 'nexora_logo',
});

const buildEmailTemplate = (title, contentHtml) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { font-family: Arial, Helvetica, sans-serif; background-color: #f4f6f9; color: #333333; margin: 0; padding: 0; }
        .wrapper { width: 100%; background-color: #f4f6f9; padding: 30px 0; }
        .container { max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e1e8ed; }
        .header { background-color: #091e3e; padding: 20px 24px; text-align: left; }
        .header-table { width: 100%; border-collapse: collapse; }
        .logo { height: 38px; width: auto; display: inline-block; vertical-align: middle; }
        .brand { color: #ffffff; font-size: 19px; font-weight: bold; display: inline-block; vertical-align: middle; margin-left: 10px; letter-spacing: 0.5px; }
        .divider { height: 4px; background-color: #06a3da; width: 100%; }
        .content { padding: 30px; }
        h2 { color: #091e3e; font-size: 18px; margin-top: 0; margin-bottom: 20px; font-weight: bold; border-bottom: 2px solid #f0f4f8; padding-bottom: 10px; }
        .field-group { margin-bottom: 20px; border-collapse: collapse; width: 100%; }
        .field-group td { padding: 10px 8px; border-bottom: 1px solid #f0f4f8; font-size: 14px; }
        .field-label { font-weight: bold; color: #64748b; width: 120px; }
        .field-value { color: #1e293b; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; line-height: 1.4; }
        .badge { display: inline-block; padding: 4px 8px; background-color: #d1fae5; color: #065f46; border-radius: 4px; font-weight: bold; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <table class="header-table">
              <tr>
                <td style="padding: 0; width: 42px;">
                  <img src="cid:nexora_logo" alt="Nexora Logo" class="logo" />
                </td>
                <td style="padding: 0;">
                  <span class="brand">Nexora IT Solutions</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="divider"></div>
          <div class="content">
            ${contentHtml}
          </div>
          <div class="footer">
            <p style="margin: 0 0 6px 0;"><strong>Nexora IT Solutions</strong> &bull; Saudi Arabia, Riyadh</p>
            <p style="margin: 0;">&copy; 2025 Nexora IT Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }

  const plainText = `A new newsletter signup has been received:\n\nEmail: ${email}`;

  const htmlContent = `
    <h2>Newsletter Subscription</h2>
    <p style="font-size: 14px; color: #475569; line-height: 1.5; margin-bottom: 20px; margin-top: 0;">
      A new user has successfully subscribed to your newsletter feed.
    </p>
    <table class="field-group">
      <tr>
        <td class="field-label">Email Address</td>
        <td class="field-value"><a href="mailto:${email}" style="color: #06a3da; text-decoration: none; font-weight: bold;">${email}</a></td>
      </tr>
      <tr>
        <td class="field-label">Status</td>
        <td class="field-value"><span class="badge">Subscribed</span></td>
      </tr>
    </table>
  `;

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.TO_EMAIL,
    subject: `New newsletter signup: ${email}`,
    text: plainText,
    html: buildEmailTemplate(`New newsletter signup: ${email}`, htmlContent),
    attachments: [getLogoAttachment()],
    replyTo: email,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Subscription email sent' });
  } catch (error) {
    console.error('Subscription email error:', error);
    return res.status(500).json({ error: 'Failed to process subscription. Please try again.' });
  }
};

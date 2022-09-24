const nodemailer = require('nodemailer');

const MAIL_USER = process.env.MAIL_USER || 'mailuser';
const MAIL_PASSWORD = process.env.MAIL_PASSWORD || 'mailpass';

// send an email to the user that has just registered and ask him to click the link
// which will confirm his registration
const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

const registrationMail = async (to, text) => {
  return await transporter.sendMail({
    from: `"Envite" <${MAIL_USER}>`,
    to,
    subject: 'Please confirm your registration with .envite',
    text,
  });
};

module.exports = {
  registrationMail,
};

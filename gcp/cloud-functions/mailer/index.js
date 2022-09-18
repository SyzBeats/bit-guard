const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.KEY || 'SomeSecret';
const MAIL_USER = process.env.MAIL_USER || 'mailuser';
const MAIL_PASSWORD = process.env.MAIL_PASSWORD || 'mailpass';
const REQ_AUTH = process.env.REQ_AUTH || 'strong-req-auth-pass';

/**
 * Generates the email text.
 * @param data {{fullName:string, confirmationUrl: string}} the data of the registration
 */
const generateText = (data) => `
 Hey ${data.fullName},
 
 Thank you for registering with https://envite.dev
 
 We kindly ask you to confirm your intent of registration by
 clicking on the link below:

 ${data.confirmationUrl}

 After that your account will be confirmed and you'll be able to start using envite.
 
 Thank you!
 Your .envite team.

 -----------------------------------------
 This is an automatically generated email.
 `;

exports.sendMail = async (req, res) => {
  try {
    // return if OPTIONS request
    if (req.method === 'OPTIONS') {
      return res?.status(200)?.send('OK');
    }

    // check if request is authorized
    if (req.headers.authorization !== REQ_AUTH) {
      return res?.status(401)?.send('Unauthorized');
    }

    // get the current user ID - this will be sent from the main backend API alsong with username and email
    const fullName = `${req.body.firstName} ${req.body.lastName}`;
    const email = req.body.email;
    const id = req.body.id;

    // create a token

    const token = jwt.sign({ id, email, name: fullName }, SECRET_KEY);

    // send an email to the user that has just registered and ask him to click the link

    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });

    const mailData = {
      fullName,
      confirmationUrl: `https://envite.dev/confirm/user?token=${token}`,
    };

    return await transporter.sendMail({
      from: `"Envite" <${MAIL_USER}>`,
      to: email,
      subject: 'Please confirm your registration with .envite',
      text: generateText(mailData),
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: `Something went wrong: ${e.message}` });
  }
};

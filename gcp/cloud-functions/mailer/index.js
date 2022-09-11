const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.key || 'SomeSecret';
const MAIL_USER = '';
const MAIL_PASSWORD = '';

/**
 * Generates the email text.
 * @param data {object} the data of the registration
 */
const generateText = (data) => `
 Hey ${data.name},
 
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

    // get the current user ID - this will be sent from the main backend API alsong with username and email

    const name = req.body.name;
    const email = req.body.email;
    const id = req.body.id;

    // create a token

    const token = jwt.sign({ id, email, name }, SECRET_KEY);

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
      name,
      confirmationUrl: `https://envite.dev/confirm?token=${token}`,
    };

    await transporter.sendMail({
      from: `"Envite" - <${MAIL_USER}>`,
      to: email,
      subject: 'Confirm your registration',
      text: generateText(mailData),
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: `Something went wrong: ${e.message}` });
  }
};

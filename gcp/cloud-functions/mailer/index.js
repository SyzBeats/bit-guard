const services = require('./services');

const REQ_AUTH = process.env.REQ_AUTH || 'strong-req-auth-pass';

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

    // new user registration
    if (req.body.type === 'registration') {
      services.validation.userRegistrationMail(req.body);

      const fullName = `${req.body.firstName} ${req.body.lastName}`;
      const email = req.body.email;
      const id = req.body.id;

      const token = services.token.generate({ id, email, name: fullName }, '1d');

      const text = services.content.registrationMail({
        fullName,
        confirmationUrl: `https://envite.dev/confirm/user?token=${token}`,
      });

      return await services.nodemailer.registrationMail(email, text);
    }

    // password reset
    if (req.body.type === 'password-reset') {
      services.validation.passwordResetMail(req.body);

      const fullName = `${req.body.firstName} ${req.body.lastName}`;
      const email = req.body.email;
      const id = req.body.id;

      const token = services.token.generate({ id }, '8h');

      const text = services.content.registrationMail({
        fullName,
        confirmationUrl: `https://envite.dev/confirm/user?token=${token}`,
      });

      return await services.nodemailer.registrationMail(email, text);
    }

    return res?.status(409)?.send('Unknown request type');
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: `Something went wrong: ${e.message}` });
  }
};

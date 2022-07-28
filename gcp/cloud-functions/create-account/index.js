require('isomorphic-fetch');
const { PrismaClient } = require('@prisma/client');

const services = require('./services');

const prisma = new PrismaClient();

exports.rateLimit = async (req, res) => {
  try {
    // return if OPTIONS request
    if (req.method === 'OPTIONS') {
      return res?.status(200)?.send('OK');
    }

    // get the user data from the request
    const email = req.body?.email;
    const password = req.body?.password;

    if (!email) {
      return res?.status(400)?.json({ message: 'Request body must contain the users email address' });
    }

    // fetch the user with prisma based on sub or email
    // TODO: join the expiration and hitCount to make this query more efficient
    const user = await prisma.user.findFirst({
      where: { email },
      include: {
        RateLimit: true,
      },
    });

    if (user) {
      // if the user is already created, generate a 1 day token and return
      return 'some-jwt-token';
    }

    // user has not been hit yet, so the initial document needs to be created
    const idToken = req.body?.id_token;

    // google account creation
    if (idToken) {
      return await services.auth.createAccountFromGoogle(idToken, res);
      // generate a token and return
    }

    // create a new user based on native account creation
    await services.auth.createAccountNative(email, password, res);

    // generate a token and return
    return 'some-jwt-token';
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: `Something went wrong: ${err.message}` });
  }
};

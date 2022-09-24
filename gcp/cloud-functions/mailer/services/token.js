const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.KEY || 'SomeSecret';

const generate = (data, expiry) => {
  const token = jwt.sign(data, SECRET_KEY, {
    expiresIn: expiry,
  });

  return token;
};

module.exports = {
  generate,
};

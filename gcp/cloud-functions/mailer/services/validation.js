const passwordResetMail = (body) => {
  if (!body.email) {
    throw new Error('Email is required');
  }

  if (!body.resetUrl) {
    throw new Error('Reset URL is required');
  }

  if (!body.resetToken) {
    throw new Error('Reset token is required');
  }
};

const userRegistrationMail = (body) => {
  if (!body.firstName) {
    throw new Error('First name is required');
  }

  if (!body.lastName) {
    throw new Error('Last name is required');
  }

  if (!body.email) {
    throw new Error('Email is required');
  }

  if (!body.id) {
    throw new Error('ID is required');
  }
};

module.exports = {
  passwordResetMail,
  userRegistrationMail,
};

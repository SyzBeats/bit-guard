/**
 * Generates the email text.
 * @param data {{fullName:string, confirmationUrl: string}} the data of the registration
 */
const registrationMail = async (data) => {
  return `Hey ${data.fullName},
 
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
};

/**
 * Generates the email text.
 * @param data {{fullName:string, resetUrl: string}} the data of the registration
 */
const passwordReset = async (data) => {
  return `Hey ${data.fullName},
      
    You have requested to reset your password for your account on https://envite.dev
    If you did not request a password reset, please ignore this email.
     
    To reset your password, please click on the link below and follow the instructions:

    ${data.resetUrl}
      
    Thank you!
    Your .envite team.
     
    -----------------------------------------
    This is an automatically generated email.
    `;
};

module.exports = {
  registrationMail,
  passwordReset,
};

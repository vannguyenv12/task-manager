const mailgun = require('mailgun-js');

const mg = mailgun({
  apiKey: process.env.API_KEY_MAILGUN,
  domain: process.env.DOMAIN_MAILGUN,
});

const sendWelcomeEmail = (email, name) => {
  const data = {
    from: 'npnv.vn1@gmail.com',
    to: email,
    subject: 'Thanks for use app',
    text: `Welcome ${name}`,
  };

  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
};

const sendCancelEmail = (email, name) => {
  const data = {
    from: 'npnv.vn1@gmail.com',
    to: email,
    subject: 'Goodbye bro!',
    text: `Dear. ${name}, goodbye see you later!`,
  };
  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};

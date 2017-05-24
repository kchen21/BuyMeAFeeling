module.exports = {
  database: 'mongodb://heroku_534rjp6p:8pp16dftom8mnjo5kid7je9u90@ds151431.mlab.com:51431/heroku_534rjp6p',
  port: 3000,
  secretKey: "Kensington$@!",

  facebook: {
    clientID: process.env.FACEBOOK_ID || '716924128486474',
    clientSecret: process.env.FACEBOOK_SECRET || 'a52835379132f7a4bede93e5cd84103a',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
};

module.exports = {
  database: 'mongodb://root:cheers21@ds133388.mlab.com:33388/buy_me_a_feeling',
  port: 3000,
  secretKey: "Kensington$@!",

  facebook: {
    clientID: process.env.FACEBOOK_ID || '716924128486474',
    clientSecret: process.env.FACEBOOK_SECRET || 'a52835379132f7a4bede93e5cd84103a',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
};

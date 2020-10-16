const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-preil.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'pJ52z96HjOBVjaLTF2sHSf2wan4o96mh',
  issuer: 'https://dev-preil.us.auth0.com/',
  algorithms: ['RS256']
});
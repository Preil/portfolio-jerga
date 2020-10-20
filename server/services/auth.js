const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/'

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

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[namespace + 'roles'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not allowed to access this data.'})
  }
}
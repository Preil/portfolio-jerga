
//Middleware
exports.checkJWT = function (req, res, next) {
  const isValidToken = true;

  // we can provide objects from middleware to route handler
  req.user = {
    name: 'Ilya',
    lastName: 'Preil'
  };

  if (isValidToken) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'Please login in order to get data'})
  }

};
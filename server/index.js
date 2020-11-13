const express = require('express');
const next = require('next');
const routes = require('../routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book')
const portfoliosRoutes = require('./routes/portfolio')
const blogRoutes = require('./routes/blog')

// Services
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
const config = require('./config')


const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'Me secrets'
  }
];


mongoose.connect(config.DB_URI, {useNewUrlParser: true})
  .then(() => {
    console.log('Db connected!')
  })
  .catch((err) => {
    console.error(err)
  })

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.use('/api/v1/books', bookRoutes);
  server.use('/api/v1/portfolios', portfoliosRoutes);
  server.use('/api/v1/blogs', blogRoutes);

  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData);
  });


  server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    return res.json(secretData);
  });


  server.all('*', (req, res) => {
    return handle(req, res);
  });




  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access!'});
    }
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`>Ready on port: ${PORT}`)
  })
});

// Express installed
// Package.json updated to start custom server
// cross-env installed to provide NODE_ENV=production
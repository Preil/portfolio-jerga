const express = require('express');
const next = require('next');
const routes = require('./routes')


const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

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

app.prepare().then(() => {
  const server = express();

  server.get('/api/v1/secret', (req, res) => {
    return res.json(secretData);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
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
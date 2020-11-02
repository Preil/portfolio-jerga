const routes = require('next-routes');

module.exports = routes()
  .add('portfolio', '/portfolios/:id', 'portfolio')
  .add('portfolioEdit', '/portfolio/:id/edit', 'portfolioEdit')
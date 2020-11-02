const routes = require('next-routes');

module.exports = routes()
  .add('portfolio', '/portfolios/:id', 'portfolio')
  .add('portfolioEdit', '/portfolios/:id/edit', 'portfolioEdit')
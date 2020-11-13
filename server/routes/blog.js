const express = require('express')
const router = express.Router();
const blogCtrl = require('../controllers/blog')

const authService = require('../services/auth');

router.post('', authService.checkJWT, authService.checkRole('siteOwner'),
  blogCtrl.createBlog);

router.get('/:id', blogCtrl.getBlogById);



// router.get('', portfolioCtrl.getPortfolios);
//

// router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'),
//   portfolioCtrl.updatePortfolio)
//
// router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'),
//   portfolioCtrl.deletePortfolio);

module.exports = router;
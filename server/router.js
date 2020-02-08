const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/products')
  .get(controllers.get)

router
  .route('/products/:productId')
  .get(controllers.getOne)

module.exports = router;
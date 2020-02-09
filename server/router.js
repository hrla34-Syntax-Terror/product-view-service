const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/api')
  .get(controllers.get)

router
  .route('/api/:productId')
  .get(controllers.getOne)

module.exports = router;
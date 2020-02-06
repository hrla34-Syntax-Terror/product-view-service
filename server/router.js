const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/products')
  .get(controllers.get)

// router
//   .route('/:_id')

module.exports = router;
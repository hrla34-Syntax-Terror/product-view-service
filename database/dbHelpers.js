var Product = require('./');

var helpers = {
  get: () => Product.find({}),
  getOne: (productId) => Product.find({productId})
}

module.exports = helpers
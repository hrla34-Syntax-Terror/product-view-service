var Product = require('./');

var helpers = {
  get: () => Product.find({})
}

module.exports = helpers
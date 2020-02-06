var mongoose = require('mongoose');

var productSchema = mongoose.Schema ({
  name: {type: String},
  brand: {type: String},
  item: {type: Number},
  color: {type: String},
  rating: {type: Number},
  ratingQ: {type: Number},
  price: {type: Number},
  size: {type: String},
  images: [{type: String}],
  detail: {type: String}
});

module.exports = productSchema


const mongoose = require('mongoose');
const Product = require('./');
const seedData = require('./products.json');

var insertSeedData = () => {
  Product.create(seedData)
  .then(() => {
    console.log('database seeded');
  })
  .catch(err => console.error(err));
};

insertSeedData()
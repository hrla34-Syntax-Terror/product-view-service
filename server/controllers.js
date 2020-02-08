const helpers = require('../database/dbHelpers.js');


const controllers = {
  get: (req, res) => {
    helpers.get()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },

  getOne: (req, res) => {
    //req.baseurl.params ??
    helpers.getOne(req.params.productId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
}

module.exports = controllers;
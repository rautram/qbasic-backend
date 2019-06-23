const mongoose = require("../database/mongodb");
const User = require("../models/user");
exports.addUser = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    device_id: req.body.device_id,
    phoneNumber: req.body.phoneNumber
  };
  User.create(data)
    .then(data => res.send({ data }))
    .catch(err => res.send({ err }));
};

exports.getUser = (req, res) => {
  const pageNumber = req.params.pageNumber;
  const pageSize = 10;
  User.find({})
    .skip((pageNumber - 1) * pageSize)
    .limit(10)
    .then(user => {
      res.send({
        error: false,
        user: user
      });
    })
    .catch(err => {
      res.send({
        error: true,
        err: err
      });
    });
};

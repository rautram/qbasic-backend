const Tags = require("../models/tags");

exports.addTags = (req, res) => {
  Tags.create({ name: req.body.name })
    .then(data => {
      res.send({
        error: false,
        message: "Successfully added tags",
        data: data
      });
    })
    .catch(err => {
      res.send({
        error: true,
        message: "Error occured",
        err: err
      });
    });
};

exports.getTags = (req, res) => {
  Tags.find()
    .then(tags => {
      res.send({
        error: false,
        tags: tags
      });
    })
    .catch(err => {
      res.status(203).send({
        error: true,
        err: err
      });
    });
};

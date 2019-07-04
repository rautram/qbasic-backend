const sequelize = require("../util/database");
const User = sequelize.import(__dirname + "/../models/user");
const uuidv4 = require("uuid/v4");
const getCode = require("../util/getCode");

exports.addUser = async (req, res) => {
  await User.create({
    userid: getCode(uuidv4()),
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    name: req.body.name,
    valid: true,
    deviceid: req.body.deviceid
  })
    .then(data => {
      res.send({
        data: data,
        message: "User Successfully Created"
      });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

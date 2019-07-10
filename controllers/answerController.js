const Sequelize = require("../util/database");
const Answers = Sequelize.import(__dirname + "/../models/answers");
const uuidv4 = require("uuid/v4");
const getCode = require("../util/getCode");

exports.addAnswer = async (req, res) => {
  const answers = {
    answerid: getCode(uuidv4()),
    questionid: req.body.questionid,
    answer: req.body.answer,
    answerby: req.body.answerby,
    answerat: new Date().toISOString()
  };
  await Answers.create(answers)
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

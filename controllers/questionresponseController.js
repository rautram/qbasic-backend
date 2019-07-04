const sequelize = require("../util/database");
const QuestionResponse = sequelize.import(
  __dirname + "/../models/questionresponse"
);
const uuidv4 = require("uuid/v4");
const getCode = require("../util/getCode");

exports.addResponseToQuestion = async (req, res) => {
  const questionresponseid = getCode(uuidv4());
  await QuestionResponse.create({
    questionresponseid: questionresponseid,
    questionid: req.body.questionid,
    response: req.body.response
  })
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send({ err });
    });
};

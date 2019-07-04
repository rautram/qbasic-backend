const sequelize = require("../util/database");
const Question = sequelize.import(__dirname + "/../models/question");
const uuidv4 = require("uuid/v4");
const getCode = require("../util/getCode");

exports.addQuestion = async (req, res) => {
  const questionid = getCode(uuidv4());
  await Question.create({
    questionid: questionid,
    userid: req.body.userid,
    question: req.body.question,
    createdat: new Date().toISOString()
  })
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send({ err });
    });
};

const sequelize = require("../util/database");
const QuestionReport = sequelize.import(
  __dirname + "/../models/questionreport"
);

const uuidv4 = require("uuid/v4");
const getCode = require("../util/getCode");

exports.addReportToQuestion = async (req, res) => {
  const questionreportid = getCode(uuidv4());
  await QuestionReport.create({
    questionreportid: questionreportid,
    questionid: req.body.questionid,
    report: req.body.report,
    reportby: req.body.userid,
    createdat: new Date().toISOString()
  })
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.status(205).send({ message: "Oops some error occured" });
    });
};

const Sequelize = require("../util/database");
const Answers = Sequelize.import(__dirname + "/../models/answers");
const AnswerReport = Sequelize.import(__dirname + "/../models/answerreport");
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

exports.addAnswerReport = async (req, res) => {
  const reports = {
    answerreportid: getCode(uuidv4()),
    answerid: req.body.answerid,
    reportanswer: req.body.reportanswer,
    answerreportby: req.body.answerreportby,
    answerreporton: new Date().toISOString(),
    answerreportmofifiedon: new Date().toISOString()
  };
  await AnswerReport.create(reports)
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

exports.getAnswerReport = (req, res) => {
  const pageSize = req.params.pageSize;
  const limit = 1;
  const skip = (pageSize - 1) * limit;
  Sequelize.query(
    `SELECT a.answerid, a.answer, u1.name as "answerby",ar.answerreportid, ar.reportanswer, u2.name as "reportby" from answers a limit=${limit} offset=${skip} inner join user u1 on a.answerby = u1.userid left join answerreport ar on a.answerid = ar.answerid left JOIN user u2 on ar.answerreportby = u2.userid WHERE a.questionid = "7dbacedc8df84009ba3a96d61285e76c";`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(rows => {
      var result = [],
        index = {};
      rows.forEach(row => {
        if (!(row.answerid in index)) {
          index[row.answerid] = {
            answerid: row.answerid,
            answer: row.answer,
            answerby: row.answerby,
            reports: []
          };
          result.push(index[row.answerid]);
        }
        if (row.reportanswer !== null) {
          index[row.answerid].reports.push({
            reportanswer: row.reportanswer,
            reportby: row.reportby
          });
        }
      });
      res.send({ result });
    })
    .catch(err => {
      res.status(205).send({ mesage: "oops error" });
    });
};

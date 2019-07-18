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
  Sequelize.query(
    `SELECT a.answerid, a.answer, u1.name as "answerby",ar.answerreportid, ar.reportanswer, u2.name as "reportby" from answers a inner join user u1 on a.answerby = u1.userid left join answerreport ar on a.answerid = ar.answerid left JOIN user u2 on ar.answerreportby = u2.userid WHERE a.questionid = "7dbacedc8df84009ba3a96d61285e76c";`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(data => {
      var newData = [];
      newData.push(data[0]);
      data.map((item, index) => {
        const id = item.answerid;
        var count = 0;
        data.map(items => {
          if (id === items.answerid && id !== data[0].answerid) {
            count = count + 1;
          }
        });
        if (count === 1) {
          console.log("I am here");
          newData.push(item);
        }
      });
      res.send({ newData: newData, data: data });
    })
    .catch(err => {
      res.status(205).send({ mesage: "oops error" });
    });
};

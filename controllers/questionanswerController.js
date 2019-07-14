const Sequelize = require("../util/database");

exports.getQuestionAnswerByUser = async (req, res) => {
  await Sequelize.query(
    `select q.question, u1.name as "asker_name", qr.report, u2.name as "reporter_name" from question q inner join user u1 on q.userid = u1.userid inner join questionreport qr on q.questionid = qr.questionid inner join user u2 on qr.reportby = u2.userid WHERE q.questionid ="7dbacedc8df84009ba3a96d61285e76c" `,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(data => {
      const userdata = {};
      const reports = [];
      if (data.length > 0) {
        userdata.question = data[0].question;
        userdata.asker_name = data[0].asker_name;
        data.map(item => {
          reports.push({
            report: item.report,
            reportBy: item.reporter_name
          });
        });
      }
      res.send({ userdata, reports });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

exports.getQuestionsList = async (req, res) => {
  const limit = 5;
  const pageSize = req.params.pageSize;
  const offset = (pageSize - 1) * limit;
  await Sequelize.query(
    `SELECT q.questionid, q.question, COUNT(a.answer) as total from (SELECT * from question limit ${limit} OFFSET ${offset}) as q left join answers as a on q.questionid = a.questionid GROUP BY q.questionid;`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.send({ err });
    });
};

exports.getQuestionReport = async (req, res) => {
  const limit = 10;
  const pageSize = req.params.pageSize;
  const offset = (pageSize - 1) * limit;
  await Sequelize.query(
    `SELECT questionid, question, (SELECT COUNT(answerid) from answers WHERE questionid = question.questionid) as total_answer, (SELECT COUNT(questionreportid) from questionreport WHERE questionid = question.questionid ) as report_count from question LIMIT ${limit} OFFSET ${offset};`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

exports.updateQuestion = async (req, res) => {
  const questionid = req.body.questionid;
  const question = req.body.question;
  await Sequelize.query(
    `select answer from answers where questionid = "${questionid}"`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  )
    .then(data => {
      if (data.length > 0) {
        res
          .status(205)
          .send({ message: "This question contains answer so can't update" });
      } else {
        Sequelize.query(
          `update question set question = "${question}" where questionid = "${questionid}"`,
          {
            type: Sequelize.QueryTypes.UPDATE
          }
        )
          .then(data => {
            res.send({
              message: "Question successfully updated"
            });
          })
          .catch(err => {
            res.status(206).send({ message: "Server error occured" });
          });
      }
    })
    .catch(err => {
      res.status(206).send({ message: "Server error occured" });
    });
};

exports.deleteQuestion = async (req, res) => {
  const id = req.params.questionid;
  await Sequelize.query(`delete questionreport where questionid ="${id}"`, {
    type: Sequelize.QueryTypes.DELETE
  })
    .then(data => {
      Sequelize.query(`delete question where questionid = "${id}"`, {
        type: Sequelize.QueryTypes.DELETE
      })
        .then(data => {
          res.send({ message: "successfully deleted" });
        })
        .catch(err => {
          res.status(205).send({ message: "error occured" });
        });
    })
    .catch(err => {
      res.status(300).send({ err });
    });
};

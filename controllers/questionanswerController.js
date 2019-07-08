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

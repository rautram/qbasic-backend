const Sequelize = require("../util/database");

exports.getQuestionAnswerByUser = async (req, res) => {
  await Sequelize.query(
    `select q.question, q.userid, qr.report, qr.userid from question as q inner join questionreport as qr on q.userid = qr.userid `,
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

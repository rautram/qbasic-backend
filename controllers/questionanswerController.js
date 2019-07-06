const Sequelize = require("../util/database");

exports.getQuestionAnswerByUser = async (req, res) => {
  await Sequelize.query(`SELECT * from question inner join questionreport`, {
    type: Sequelize.QueryTypes.SELECT
  })
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.status(205).send({ err });
    });
};

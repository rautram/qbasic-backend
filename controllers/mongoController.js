const QnaModel = require("../schema/qnaSchema");

exports.addQuestion = async (req, res) => {
  console.log("I am here");
  try {
    const qna = await QnaModel.create({
      question: req.body.question,
      answer: req.body.answer,
      description: req.body.description,
      tag: req.body.tag
    });
    res.send({
      qna
    });
  } catch (err) {
    res.status(205).send({
      msg: "Something went wrong!! Please try again later"
    });
  }
};

exports.getQuestion = async (req, res) => {
  try {
    const question = await QnaModel.find({ tag: req.params.tag });
    res.send({ question });
  } catch (err) {
    res.status(205).send({ err });
  }
};

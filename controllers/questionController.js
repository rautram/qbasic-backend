const Question = require("../models/questions");

exports.addQuestion = (req, res) => {
  Question.create({
    question: req.body.question,
    askedBy: req.body.askedBy
  })
    .then(question => {
      res.send({
        error: false,
        question: question
      });
    })
    .catch(err => {
      res.status(203).send({
        error: true,
        err: err
      });
    });
};

exports.getQuestion = (req, res) => {
  Question.findById({ _id: req.params.id })
    .populate("askedBy")
    .populate("answers.answerBy")
    .then(questions => {
      res.send(questions);
    })
    .catch(err => {
      res.status(203).send({
        error: true,
        err: err
      });
    });
};

exports.addAnswer = async (req, res) => {
  await Question.findById({ _id: req.body.id })
    .then(async question => {
      console.log(question);
      question.answers.push({
        answer: req.body.answer,
        answerBy: req.body.answerBy
      });
      await question.save();
    })
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.send({ err });
    });
};

exports.updateAnswer = (req, res) => {
  Question.findById({ _id: req.body.id })
    .then(question => {
      question.answers[req.body.index].answer = req.body.answer;
      question
        .save()
        .then(data => {
          res.send({ data });
        })
        .catch(err => {
          res.send({ err });
        });
    })
    .then(response => {
      console.log("hahah");
    })
    .catch(err => {
      console.log(err);
    });
};

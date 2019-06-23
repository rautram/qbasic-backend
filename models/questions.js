const mongoose = require("../database/mongodb");

const answerSchema = mongoose.Schema({
  answer: { type: String, required: true },
  answerBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  }
});

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  askedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  askedAt: { type: Date, required: true, default: Date.now() },
  chapter: { type: String, required: false },
  description: { type: String, required: false },
  answers: [answerSchema]
});

questionSchema.index({ chapter: "text" });

const question = mongoose.model("Question", questionSchema);

module.exports = question;

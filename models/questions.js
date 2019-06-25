const mongoose = require("../database/mongodb");

const reportSchema = mongoose.Schema({
  reportBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true
  },
  report: { type: String, required: true }
});

const responseSchema = mongoose.Schema({
  responseBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true
  },
  response: { type: Number, required: true, default: 0 }
});

const answerSchema = mongoose.Schema({
  answer: { type: String, required: true },
  answerBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  reports: [reportSchema],
  response: [responseSchema]
});

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  askedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  askedAt: { type: Date, required: true, default: Date.now() },
  tag: { type: String, required: true, default: "Simple Question" },
  description: { type: String, required: false },
  reports: [reportSchema],
  response: [responseSchema],
  answers: [answerSchema]
});

questionSchema.index({ chapter: "text" });

const question = mongoose.model("Question", questionSchema);

module.exports = question;

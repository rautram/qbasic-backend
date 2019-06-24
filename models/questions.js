const mongoose = require("../database/mongodb");

const answerSchema = mongoose.Schema({
  answer: { type: String, required: true },
  answerBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  reports: [{ type: String, required: true }],
  helpful: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
    }
  ],
  unhelpful: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
    }
  ]
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
  reports: [{ type: String, required: true }],
  response: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" }
  ],
  answers: [answerSchema]
});

questionSchema.index({ chapter: "text" });

const question = mongoose.model("Question", questionSchema);

module.exports = question;

const mongoose = require("mongoose");

const qnaSchema = mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  description: { type: String },
  tag: { type: Number, required: true }
});

const QnaModel = mongoose.model("qnaSchema", qnaSchema);

module.exports = QnaModel;

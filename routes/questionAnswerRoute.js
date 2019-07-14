const express = require("express");
const questionAnswerController = require("../controllers/questionanswerController");

const router = express.Router();

router.get("/user", questionAnswerController.getQuestionAnswerByUser);
router.get("/questions/:pageSize", questionAnswerController.getQuestionsList);
router.get(
  "/question/report/:pageSize",
  questionAnswerController.getQuestionReport
);

module.exports = router;

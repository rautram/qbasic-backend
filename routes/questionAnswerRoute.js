const express = require("express");
const questionAnswerController = require("../controllers/questionanswerController");

const router = express.Router();

router.get("/user", questionAnswerController.getQuestionAnswerByUser);
router.get("/questions", questionAnswerController.getQuestionsList);

module.exports = router;

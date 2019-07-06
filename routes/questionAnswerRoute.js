const express = require("express");
const questionAnswerController = require("../controllers/questionanswerController");

const router = express.Router();

router.get("/user", questionAnswerController.getQuestionAnswerByUser);

module.exports = router;

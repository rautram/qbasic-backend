const express = require("express");

const answerController = require("../controllers/answerController");

const router = express.Router();

router.post("/add", answerController.addAnswer);
router.post("/add/report", answerController.addAnswerReport);
router.get("/get/:pageSize", answerController.getAnswerReport);

module.exports = router;

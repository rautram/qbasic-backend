const express = require("express");

const QuestionReportController = require("../controllers/questionreportController");

const router = express.Router();

router.post("/add/report", QuestionReportController.addReportToQuestion);

module.exports = router;

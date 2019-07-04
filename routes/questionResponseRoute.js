const express = require("express");
const questionResponseController = require("../controllers/questionresponseController");
const router = express.Router();

router.post(
  "/user/add/response/question",
  questionResponseController.addResponseToQuestion
);

module.exports = router;

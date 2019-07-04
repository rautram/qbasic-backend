const express = require("express");

const questionController = require("../controllers/questionController");

const router = express.Router();

router.post("/user/add/question", questionController.addQuestion);

module.exports = router;

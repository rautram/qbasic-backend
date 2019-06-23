const express = require("express");

const questionController = require("../controllers/questionController");

const router = express.Router();

router.post("/add-question", questionController.addQuestion);

router.get("/get-question/:id", questionController.getQuestion);

router.post("/add/answer", questionController.addAnswer);

router.post("/update/answer", questionController.updateAnswer);

module.exports = router;

const express = require("express");
const mongoController = require("../controllers/mongoController");

const router = express.Router();

router.post("/question/add", mongoController.addQuestion);

router.get("/question/:tag", mongoController.getQuestion);

module.exports = router;

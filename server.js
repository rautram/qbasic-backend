const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const userRoute = require("./routes/userRoutes");
const questionRoute = require("./routes/questionRoute");
const questionResponseRoute = require("./routes/questionResponseRoute");
const questionReportRoute = require("./routes/questionReportRoute");
const questionAnswerRoute = require("./routes/questionAnswerRoute");

const answerRoute = require("./routes/answerRoute");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Qbasic app" });
});

app.use("/user", userRoute);
app.use("/question", questionRoute);
app.use("/response/question", questionResponseRoute);

app.use("/report/question", questionReportRoute);

app.use("/get/qna", questionAnswerRoute);
app.use("/answer", answerRoute);

const PORT = process.env.PORT || 7000;

sequelize
  .sync({ force: false })
  .then(result => {
    app.listen(PORT, () => {
      console.log("Server running at ", PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });

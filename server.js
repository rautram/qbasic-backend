const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");

const mongoose = require("./database/mongodb");

const app = express();
const PORT = process.env.PORT || 6000;
app.use(cors());
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.use("/question", questionRoute);

app.listen(PORT, () => {
  console.log("Server is runnig at port ", PORT);
});

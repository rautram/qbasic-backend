const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const userRoute = require("./routes/userRoutes");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Qbasic app" });
});

app.use("/user", userRoute);

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

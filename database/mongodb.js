const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rautram:rautram@cluster0-sccd5.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  },
  () => console.log("Database connected successfully")
);

module.exports = mongoose;

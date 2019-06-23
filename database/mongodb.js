const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://oneplus5t:oneplus5t@cluster0-sccd5.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  },
  () => console.log("Database connected successfully")
);

module.exports = mongoose;

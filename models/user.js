const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  device_id: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;

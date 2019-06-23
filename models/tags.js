const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

// tagsSchema.index({ name: "text" });

const tagModel = mongoose.model("Tags", tagsSchema);

module.exports = tagModel;

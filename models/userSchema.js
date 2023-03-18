const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  varified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);

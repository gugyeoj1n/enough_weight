const mongoose = require("../node_modules/mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  following: [
    {
      type: String,
    },
  ],

  follower: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
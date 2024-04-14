const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    max: 50,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 30,
    default: "",
  },
  lastName: {
    type: String,
    default: "",

    trim: true,
    min: 3,
    max: 30,
  },

  password: {
    type: String,
    required: true,
    min: 8, // you can adjust the minimum length as needed
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;

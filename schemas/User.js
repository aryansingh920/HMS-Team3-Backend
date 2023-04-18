const mongoose = require("mongoose");

const user = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  info: {
    name: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    biologicalGender: {
      type: String,
    },
    records: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "healthRecords",
      },
    ],
  },
});
module.exports = mongoose.model("users", user);

const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    total: {
      type: Number,
      required: [true, "Total is required"],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;

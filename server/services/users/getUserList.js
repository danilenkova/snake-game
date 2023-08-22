const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { User } = require("../../models");

const getUsersList = asyncHandler(async () => {
  const users = await User.find({});
  if (!users) {
    throw new NotFound("Users not found");
  }
  return users;
});

module.exports = getUsersList;

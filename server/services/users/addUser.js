const asyncHandler = require("express-async-handler");

const { User } = require("../../models");

const addUser = asyncHandler(async ({ name, total }) => {
  const newUser = await User.create({
    name,
    total,
  });
  return newUser;
});

module.exports = addUser;

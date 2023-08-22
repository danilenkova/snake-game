const { users: services } = require("../../services");

const addUser = async (req, res) => {
  const result = await services.addUser(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        result,
      },
    },
  });
};

module.exports = addUser;

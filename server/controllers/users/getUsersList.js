const { users: service } = require("../../services");

const getUsersList = async (req, res) => {
  const result = await service.getUsersList();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getUsersList;

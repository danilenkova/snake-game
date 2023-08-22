const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/add", validation(userJoiSchema), ctrlWrapper(ctrl.addUser));

router.get("/", ctrlWrapper(ctrl.getUsersList));

module.exports = router;

const Joi = require("joi");

const userJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name cannot be an empty field",
    "any.required": "missing required name field",
  }),
  total: Joi.number().required().messages({
    "string.empty": "Total cannot be an empty field",
    "any.required": "missing required total field",
  }),
});

module.exports = {
  userJoiSchema,
};

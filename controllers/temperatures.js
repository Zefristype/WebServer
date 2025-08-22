const temperatures = require("../models/temperatures");
const { HttpError } = require("../helpers/index");
const { ctrlWrapper } = require("../decorators/index");
// const Joi = require("joi");

// const AddSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

// const UpdateSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string(),
//   phone: Joi.string(),
// });

const getAll = async (req, res, next) => {
  const result = await temperatures.listTemperatures();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { temperatureId } = req.params;
  const result = await temperatures.getTemperatureById(temperatureId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};
const add = async (req, res, next) => {
  const result = await temperatures.addTemperature(req.body);
  res.status(201).json(result);
};
const deleteById = async (req, res, next) => {
  console.log(req.params);
  const { temperatureId } = req.params;
  const result = await temperatures.removeTemperature(temperatureId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "temperature deleted" });
};
const updateById = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }

  if (error) {
    throw HttpError(400, error.message);
  }
  const { temperatureId } = req.params;
  const result = await temperatures.updateTemperature(temperatureId, req.body);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(201).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};

const fs = require("fs").promises;
const { nanoid } = require("nanoid");
const path = require("path");

const temperaturesPath = path.join(__dirname, "/temperatures.json");

const listTemperatures = async () => {
  const data = await fs.readFile(temperaturesPath);
  return JSON.parse(data);
};

const getTemperatureById = async (temperatureId) => {
  const list = await listTemperatures();
  const temperature = list.find(({ id }) => id === temperatureId);
  return temperature || null;
};

const removeTemperature = async (temperatureId) => {
  const list = await listTemperatures();
  const index = list.findIndex(({ id }) => id === temperatureId);
  if (index === -1) {
    return null;
  }
  const [temperature] = list.splice(index, 1);
  await fs.writeFile(temperaturesPath, JSON.stringify(list, null, 2));
  return temperature;
};

const addTemperature = async (body) => {
  const list = await listTemperatures();
  const newTemperature = {
    id: nanoid(),
    ...body,
  };
  list.push(newTemperature);
  await fs.writeFile(temperaturesPath, JSON.stringify(list, null, 2));
  return newTemperature;
};

const updateTemperature = async (temperatureId, body) => {
  const list = await listTemperatures();
  const index = list.findIndex(({ id }) => id === temperatureId);
  if (index === -1) {
    return null;
  }
  const prevTemperature = list.find(({ id }) => id === temperatureId);
  const updatedTemperature = {
    ...prevTemperature,
    id: temperatureId,
    ...body,
  };
  list[index] = updatedTemperature;
  await fs.writeFile(temperaturesPath, JSON.stringify(list, null, 2));
  return list[index];
};

module.exports = {
  listTemperatures,
  getTemperatureById,
  removeTemperature,
  addTemperature,
  updateTemperature,
};

const express = require("express");
const temperatures = require("../../controllers/temperatures");
const router = express.Router();

router.get("/", temperatures.getAll);

router.get("/:temperatureId", temperatures.getById);

router.post("/", temperatures.add);

router.delete("/:temperatureId", temperatures.deleteById);

router.put("/:temperatureId", temperatures.updateById);

module.exports = router;

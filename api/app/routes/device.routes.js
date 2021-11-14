module.exports = (app) => {
  const devices = require("../controllers/device.controllers");

  app.get("/devices", devices.findAll);

  app.post("/devices", devices.create);

  app.get("/devices/:deviceId", devices.findOne);

  app.put("/devices/:deviceId", devices.update);

  app.delete("/devices/:deviceId", devices.delete);
};
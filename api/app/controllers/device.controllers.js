const Device = require("../models/device.models");

exports.create = (req, res) => {
  const device = new Device({
    id: req.body.id,
    name: req.body.name || "Unnamed Device",
    price: req.body.price || 0,
    quantity: req.body.quantity || 0,
    desc: req.body.desc,
    status: req.body.status || true,
  });

  device
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating device.",
      });
    });
};

exports.findAll = (req, res) => {
  Device.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Cannot find anything",
      });
    });
};

exports.findOne = (req, res) => {
  Device.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Device not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Device not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving data with id " + req.params.id,
      });
    });
};

exports.update = (req, res) => {
  Device.findByIdAndUpdate(req.params.deviceId, {
    id: req.body.id,
    name: req.body.name || "Unnamed Device",
    price: req.body.price || 0,
    quantity: req.body.quantity || 0,
    desc: req.body.desc,
    status: req.body.status || false,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Device not found with id " + req.params.deviceId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Device not found with id " + req.params.deviceId,
        });
      }
      return res.status(500).send({
        message: "Error updating device with id " + req.params.deviceId,
      });
    });
};

exports.delete = (req, res) => {
  Device.findByIdAndRemove(req.params.deviceId)
    .then((device) => {
      if (!device) {
        return res.status(404).send({
          message: "Device not found with id " + req.params.deviceId,
        });
      }
      res.send({ message: "Device deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Device not found with id " + req.params.deviceId,
        });
      }
      return res.status(500).send({
        message: "Could not delete device with id " + req.params.deviceId,
      });
    });
};

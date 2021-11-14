const mongoose = require("mongoose");

const DeviceSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    price: Number,
    quantity: Number,
    desc: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", DeviceSchema);

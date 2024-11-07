const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
  },
  { collection: "cars" }
);

module.exports = mongoose.model("Cars", CarsSchema);

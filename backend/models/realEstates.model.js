const mongoose = require("mongoose");
const RealEstateSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model("EstateType", RealEstateSchema);

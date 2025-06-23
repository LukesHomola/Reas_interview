const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  EstateType: { type: String, required: true },
  FullName: { type: String, required: true },
  Phone: { type: String, required: true },
  Email: { type: String, required: true },
  Region: { type: String, required: true },
  District: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", LeadSchema);

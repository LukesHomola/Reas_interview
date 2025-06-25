const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔌 Mongo URI:", process.env.MONGO_URI);
    console.log("✅ MongoDB připojeno");
  } catch (err) {
    console.error("❌ Chyba DB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

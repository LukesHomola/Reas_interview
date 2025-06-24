const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/lead.router");
const regionRoutes = require("./routes/region.router");
const RealEstateRoutes = require("./routes/realEstates.router");

dotenv.config();

const server = new Koa();
server.use(bodyParser());

connectDB();
server.use(leadRoutes.routes());
server.use(regionRoutes.routes());
server.use(RealEstateRoutes.routes());

/* Server connection */
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server běží na http://localhost:${PORT}`);
});

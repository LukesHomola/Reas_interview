const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/lead.router");

dotenv.config();

const server = new Koa();
server.use(bodyParser());

connectDB();
server.use(leadRoutes.routes());

/* Server connection */
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server běží na http://localhost:${PORT}`);
});

const Router = require("koa-router");
const Region = require("../models/regions.model");

const router = new Router();

router.get("/regions", async (ctx) => {
  const regions = await Region.find().select("name");
  ctx.body = regions;
});

router.get("/districts", async (ctx) => {
  const { region } = ctx.query;
  if (!region) {
    ctx.status = 400;
    ctx.body = { error: "Region is required" };
    return;
  }

  const found = await Region.findOne({ name: region }).select("districts");
  if (!found) {
    ctx.status = 404;
    ctx.body = { error: "Region not found" };
    return;
  }

  ctx.body = found.districts;
});

module.exports = router;

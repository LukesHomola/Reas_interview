const Router = require("koa-router");
const EstateType = require("../models/realEstates.model");

const router = new Router({
  prefix: "/real-estates",
});

router.get("/", async (ctx) => {
  try {
    const data = await EstateType.find().select("label value");
    ctx.body = data;
  } catch (err) {
    console.error("❌ Chyba při načtení real-estates:", err.message);

    ctx.status = 500;
    ctx.body = { error: "Chyba při získávání typů nemovitostí" };
  }
});

module.exports = router;

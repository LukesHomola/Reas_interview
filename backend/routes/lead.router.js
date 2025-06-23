const Router = require("koa-router");
const { createLead } = require("../controllers/lead.controller");

const router = new Router();

router.post("/lead", createLead);

module.exports = router;

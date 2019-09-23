const router = require("koa-router")();

const IndexRouter = require("./front/index.js");
const BackRouter = require("./back/index.js");

router.use("/",IndexRouter.routes());
router.use("/back",BackRouter.routes());

module.exports = router;
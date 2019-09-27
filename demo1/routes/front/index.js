const router = require('koa-router')()

const indexController = require("../../controller/front/indexController.js");

router.get('/',indexController.home)

module.exports = router

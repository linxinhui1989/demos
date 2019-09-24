const router = require('koa-router')()

router.prefix('/back')

router.get('/', function (ctx, next) {
  ctx.render("back/index")
})

module.exports = router

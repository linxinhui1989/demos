const router = require('koa-router')()

router.prefix('/login')

router.get('/', async (ctx, next) => {
   ctx.body = "登录页面";
})


module.exports = router

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
   ctx.body = "登录成功后的首页面";
})

module.exports = router

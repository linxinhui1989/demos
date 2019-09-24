const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.render("front/index")
})
.get("/play_list",async(ctx,next)=>{
  ctx.render("front/play_list")
})
.get("/music_search",async(ctx,next)=>{
  ctx.render("front/music_search")
})

module.exports = router

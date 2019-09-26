const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.render("front/index")
})
.get("/music_playing",async(ctx,next)=>{
  ctx.render("front/music_playing")
})
.get("/play_list",async(ctx,next)=>{
  ctx.render("front/play_list")
})
.get("/music_search",async(ctx,next)=>{
  ctx.render("front/music_search")
})
/*飙升榜页面*/
.get("/soaring",async(ctx,next)=>{
  ctx.render("front/soaring")
})

module.exports = router

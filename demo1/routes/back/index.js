const router = require('koa-router')()

router.prefix('/back')

const indexController = require("../../controller/back/indexController.js");
const musicController = require("../../controller/back/musicController.js")

const checkLogin = require("../../middleware/checkLogin.js");
/*检测用户登录的中间件*/
router.use(checkLogin)
/*后端首页面*/
router.get('/',indexController.home)
.get('/login',indexController.login)
.post('/login',indexController.doLogin)
.get('/logout',indexController.logout)
/*音乐相关操作*/
.get('/music-list',musicController.musicList)
.get('/music-add',musicController.musicAdd)
.post('/music-add',musicController.musicDoAdd)
.get('/music-del',musicController.musicDel)

module.exports = router

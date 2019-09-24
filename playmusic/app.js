const Koa = require('koa')
const app = new Koa()
const artTemp = require("koa-art-template");
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require("koa-session")

const {
	fileDir,
	uploadDir,
	renderDir,
	keys,
	extname
} = require("./config.js")

app.keys = keys
const CONFIG = {
	key: 'koa:sess',
	maxAge: 1*24*3600*1000
}

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + fileDir))


// 设置模板引擎的渲染位置以及渲染的文件后缀
artTemp(app, {
  root: renderDir,
  extname: extname,
  debug: process.env.NODE_ENV !== 'production'
});


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

const index = require('./routes/front/index.js')
const back = require('./routes/back/index.js')

// routes
app.use(index.routes())
app.use(back.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

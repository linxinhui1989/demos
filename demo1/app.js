const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require("koa-session")
const index = require('./routes/index')
const login = require('./routes/login')

// error handler
onerror(app)

app.keys = ['aa','bb','cc'];
const CONFIG = {
	key: 'koa:sess',
	maxAge: 365*24*3600*1000
}
app.use(session(CONFIG, app));

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async(ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(require("./middleware/checkLogin.js"))

// routes
app.use(index.routes())
app.use(login.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
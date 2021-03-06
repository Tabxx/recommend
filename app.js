const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');

// const index = require('./routes/index')
// const users = require('./routes/users')
const router = require('./routes/route');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/views'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// 跨域
app.use(cors());

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response 返回
app.use(async (ctx, next) => {
    ctx.error = (msg, result) => {
        ctx.body = {
            code: 1,
            msg: msg || '',
            result: result || null
        }
    };
    ctx.success = (msg, result) => {
        ctx.body = {
            code: 0,
            msg: msg || '',
            result: result || null
        }
    }
    await next();
})

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
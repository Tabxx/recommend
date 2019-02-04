const Koa = require('koa');
const app = new Koa();
const router = require('./router/router');

// 配置文件
const config = require('./config/default');
const logger = require('./middleware/logger');
const log = logger();

// 日志文件
app.use(logger());

// 路由
app
    .use(router.routes())
    .use(router.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
    console.log('server error', err);
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
        message: err.message || '服务器端错误'
    };
});

app.listen(config.port);
console.log(`server run in 127.0.0.1:${config.port}`)
// 路由
const Router = require('koa-router');
const router = new Router();
// 商城
const mall = require('./mall/mall');

router.get('/', (ctx, next) => {
    ctx.body = 'router';
    ctx.throw(404);
});

router.use('/mall', mall.routes());

module.exports = router;
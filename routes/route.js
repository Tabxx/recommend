const router = require('koa-router')();
const cpu = require('./cpu');

// CPU
router.use('/cpu', cpu.routes());

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

module.exports = router;
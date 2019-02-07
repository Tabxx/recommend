const router = require('koa-router')();
const cpu = require('./cpu');
const graphics = require('./graphics');
const memory = require('./memory');
const HardDisk = require('./HardDisk');
const mainboard = require('./mainboard');

// CPU
router.use('/cpu', cpu.routes());
// 显卡
router.use('/graphics', graphics.routes());
// 内存条
router.use('/memory', memory.routes());
// 硬盘
router.use('/harddisk', HardDisk.routes());
router.use('/mainboard', mainboard.routes());

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

module.exports = router;
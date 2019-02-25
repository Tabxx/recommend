const router = require('koa-router')();
const cpu = require('./cpu');
const graphics = require('./graphics');
const memory = require('./memory');
const HardDisk = require('./HardDisk');
const mainboard = require('./mainboard');
const list = require('./list');
const user = require('./user');
const upload = require('./upload');
const comment = require('./comment');

// CPU
router.use('/cpu', cpu.routes());
// 显卡
router.use('/graphics', graphics.routes());
// 内存条
router.use('/memory', memory.routes());
// 硬盘
router.use('/harddisk', HardDisk.routes());
// 主板
router.use('/mainboard', mainboard.routes());
// 配置清单
router.use('/list', list.routes());
// 用户
router.use('/user', user.routes());
// 上传文件
router.use('/upload', upload.routes());
// 评论
router.use('/comment', comment.routes());

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

module.exports = router;
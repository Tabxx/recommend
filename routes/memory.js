const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取内存列表
router.get('/', async(ctx, next) => {
    // 查询符合条件的内存条
    let memorys = await utils.QUERY_HARDWARE(ctx, 'memory');
    ctx.body = {
        code: 0,
        msg: '',
        result: memorys
    };
})

module.exports = router;
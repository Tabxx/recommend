const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取显卡列表
router.get('/', async(ctx, next) => {
    let graphics = await utils.QUERY_HARDWARE(ctx, 'graphics');
    ctx.body = {
        code: 0,
        msg: '',
        result: graphics
    };
})

module.exports = router;
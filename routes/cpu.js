const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取cpu列表
router.get('/', async(ctx, next) => {

    // 查询符合条件的cpu
    let cpus = await utils.QUERY_HARDWARE(ctx, 'cpu');
    ctx.body = {
        code: 0,
        msg: '',
        result: cpus
    };
})

router.get('/gettypes', async(ctx, next) => {
    let types = [];
    types = await utils.QUERY_TYPES('cpu', 'brand,series', {
        brand: '品牌',
        series: '系列'
    });
    ctx.body = {
        code: 0,
        msg: '',
        result: types
    };
})

module.exports = router
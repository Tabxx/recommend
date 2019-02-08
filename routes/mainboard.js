const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取主板列表
router.get('/', async(ctx, next) => {
    let disks = await utils.QUERY_HARDWARE(ctx, 'mainboard');
    ctx.body = {
        code: 0,
        msg: '',
        result: disks
    };
})

// 获取硬盘分类列表
router.get('/gettypes', async(ctx, next) => {
    let types = [];
    // 获取分类字段
    let field = ctx.request.query.field;
    // 分类字段格式化
    let format = {
        brand: '品牌',
        cpu_slot: 'CPU插槽',
        price: '价格',
        version: '版型',
        chipset: '主芯片组'
    };
    // 参数为空时，返回所有字段
    field = field ? field : 'brand,cpu_slot,version,price,chipset';

    types = await utils.QUERY_TYPES('mainboard', field, format);
    ctx.body = {
        code: 0,
        msg: '',
        result: types
    };
})
module.exports = router;
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

// 获取内存分类列表
router.get('/gettypes', async(ctx, next) => {
    let types = [];
    // 获取分类字段
    let field = ctx.request.query.field;
    // 分类字段格式化
    let format = {
        brand: '品牌',
        capacity: '内存容量',
        frequency: '内存主频',
        price: '价格',
        type: '内存条类型'
    };
    // 参数为空时，返回所有字段
    field = field ? field : 'brand,capacity,frequency,price,type';

    types = await utils.QUERY_TYPES('memory', field, format);
    ctx.body = {
        code: 0,
        msg: '',
        result: types
    };
})
module.exports = router;
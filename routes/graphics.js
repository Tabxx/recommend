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

// 获取显卡分类列表
router.get('/gettypes', async(ctx, next) => {
    let types = [];
    // 获取分类字段
    let field = ctx.request.query.field;
    // 分类字段格式化
    let format = {
        brand: '品牌',
        capacity: '显卡容量',
        chip: '显卡芯片',
        price: '价格',
        type: '显卡类型'
    };
    // 参数为空时，返回所有字段
    field = field ? field : 'brand,capacity,chip,price,type';

    types = await utils.QUERY_TYPES('graphics', field, format);
    ctx.body = {
        code: 0,
        msg: '',
        result: types
    };
})

module.exports = router;
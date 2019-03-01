const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取cpu列表
router.get('/', async (ctx, next) => {

    // 查询符合条件的cpu
    let cpus = await utils.QUERY_HARDWARE(ctx, 'cpu');
    ctx.body = {
        code: 0,
        msg: '',
        result: cpus
    };
})

// 获取cpu分类信息
router.get('/gettypes', async (ctx, next) => {
    let types = [];
    // 获取分类字段
    let field = ctx.request.query.field;
    // 分类字段格式化
    let format = {
        brand: '品牌',
        series: '系列',
        slot: '插槽',
        price: '价格'
    };
    // 参数为空时，返回所有字段
    field = field ? field : 'brand,series,slot,price';

    types = await utils.QUERY_TYPES('cpu', field, format);
    ctx.body = {
        code: 0,
        msg: '',
        result: types
    };
})

// 添加cpu
router.post('/add', async (ctx, next) => {
    let cpu_data = ctx.request.body;
    let key = Object.getOwnPropertyNames(cpu_data)
    let val = Object.values(cpu_data)

    let add_sql = sql.INERT_TABLE('cpu', key.join(','), val.map(item => `'${item}'`).join(','));
    // 插入数据库
    let result = await query.query(add_sql);
    if (result.affectedRows == 1) {
        ctx.body = {
            code: 0,
            msg: '添加成功',
            result: result.insertId
        }
    } else {
        ctx.body = {
            code: 1,
            msg: '添加失败',
            result: null
        }
    }
})

module.exports = router
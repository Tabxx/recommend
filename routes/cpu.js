const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取cpu列表
router.get('/', async (ctx, next) => {

    // 查询符合条件的cpu
    let cpus = await utils.QUERY_HARDWARE(ctx, 'cpu');
    let total = await utils.QUERY_COUNT('cpu', '*', 'status=1');
    ctx.body = {
        code: 0,
        msg: total[0].total || 0,
        result: cpus.length ? cpus : []
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
    let cpu_data = JSON.parse(ctx.request.body.form);
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

// 删除CPU
router.get('/del', async (ctx, next) => {
    let {
        cid
    } = ctx.request.query;

    // 缺少参数
    if (!cid) {
        ctx.body = {
            code: 0,
            msg: '缺少参数',
            result: null
        }
        return;
    }

    let result = await query.query(sql.UPDATE_TABLE('cpu', 'status = 0', `id IN (${cid})`));
    // 删除成功
    if (result.affectedRows) {
        ctx.body = {
            code: 0,
            msg: "删除成功",
            result: null
        }
    } else {
        ctx.body = {
            code: 1,
            msg: "删除失败",
            result: null
        }
    }
})
module.exports = router
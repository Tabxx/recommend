const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 获取显卡列表
router.get('/', async (ctx, next) => {
    let graphics = await utils.QUERY_HARDWARE(ctx, 'graphics');
    let total = await utils.QUERY_COUNT('graphics', '*', 'status=1');
    ctx.success(total[0].total || 0, graphics.length ? graphics : []);
})

// 获取显卡分类列表
router.get('/gettypes', async (ctx, next) => {
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
    ctx.success('', types)
})

// 添加显卡
router.post('/add', async (ctx, next) => {
    let Graphics_data = JSON.parse(ctx.request.body.form);
    let key = Object.getOwnPropertyNames(Graphics_data)
    let val = Object.values(Graphics_data)

    let add_sql = sql.INERT_TABLE('graphics', key.join(','), val.map(item => `'${item}'`).join(','));
    // 插入数据库
    let result = await query.query(add_sql);
    if (result.affectedRows == 1) {
        ctx.success('添加成功', result.insertId);
    } else {
        ctx.error('添加失败');
    }
})

// 删除显卡
router.get('/del', async (ctx, next) => {
    let {
        cid
    } = ctx.request.query;

    // 缺少参数
    if (!cid) {
        ctx.error('缺少参数')
        return;
    }

    let result = await query.query(sql.UPDATE_TABLE('graphics', 'status = 0', `id IN (${cid})`));
    // 删除成功
    if (result.affectedRows) {
        ctx.success('删除成功')
    } else {
        ctx.error('删除失败');
    }
})

module.exports = router;
const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');

// 获取cpu列表
router.get('/', async(ctx, next) => {
    // 获取参数
    let params = ctx.request.query;
    let where = [];
    for (let item in params) {
        // 价格区间
        if (item.toLocaleLowerCase() == 'price') {
            let prices = params.price.split('-');
            if (prices.length < 2) {
                where.push(`${item} = ${params.price}`)
            } else {
                where.push(`${item} BETWEEN ${prices[0]} AND ${prices[1]}`)
            }
        } else {
            where.push(`${item} = '${params[item]}'`)
        }
    }

    // 查询符合条件的cpu
    let cpus = await query.query(sql.QUERY_TABLE('cpu', '*', where.join(' AND ')))
    ctx.body = {
        code: 0,
        msg: '',
        result: cpus
    };
})

module.exports = router
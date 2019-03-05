const router = require('koa-router')()
const sql = require('../utils/sql')
const query = require('../utils/query')
const utils = require('../utils/utils')

// 添加方案列表
router.post('/add', async (ctx, next) => {
    let param = ctx.request.body

    // 用户信息
    if (!param.userid) {
        ctx.body = {
            code: 1,
            msg: '用户信息不存在',
            result: null
        }
        return
    }
    // 添加当前时间
    param.time = parseInt(Date.now() / 1000)
    // 获取参数信息
    let key = Object.getOwnPropertyNames(param)
    let val = Object.values(param)

    // 拼接sql
    let add_sql = sql.INERT_TABLE('list', key.join(','), val.map(item => `'${item}'`).join(','))
    // 插入数据库
    let result = await query.query(add_sql)

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

// 获取方案列表
router.get('/getlist', async (ctx, next) => {
    let {
        id,
        sortby = 0,
        type
    } = ctx.request.query
    let list = []
    // 排序规则
    let sortRule = {
        1: 'time',
        2: 'clicks',
        3: 'total'
    }

    // 兼容type为字符串
    type = Number(type);
    if ([1, 2, 3].includes(type)) {
        let query_sql = `SELECT l.*, u.username, u.avatar from list l, user u WHERE l.userid = u.id ORDER BY ${sortRule[type]} ${sortby == 1 ? 'ASC' : 'DESC'} limit 10`
        list = await query.query(query_sql)
    } else if (!id) {
        // TODO: 用户信息未获取，后期看页面是否需要
        // 单个方案详情
        list = await query.query(sql.QUERY_TABLE('list', '*'))
    } else {
        // 多个方案详情
        list = await query.query(sql.QUERY_TABLE('list', '*', `id in (${id})`))
    }

    ctx.body = {
        code: 0,
        msg: '',
        result: list
    }
})

/**
 * 方案点击量添加
 */
router.get('/addClick', async (ctx, next) => {
    let list_id = ctx.query.id
    if (list_id) {
        let add_sql = `update list set clicks = clicks + 1 where id=${list_id}`
        await query.query(add_sql)
    }
    ctx.body = {
        code: 0,
        msg: '',
        result: null
    }
})
module.exports = router
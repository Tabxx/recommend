const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 发评论
router.post('/sendcomment', async (ctx, next) => {
    let {
        uid,
        content,
        type,
        pid,
        score = 0
    } = ctx.request.body;

    // 参数验证
    if ([uid, content, type, pid].includes(undefined)) {
        ctx.body = {
            code: 0,
            msg: '缺少参数',
            result: null
        }
        return;
    }
    // 获取当前时间戳
    let time = parseInt(Date.now() / 1000);

    let add_sql = sql.INERT_TABLE('comments', 'content,uid,pid,type,time,score', `'${content}',${uid},${pid},${type},'${time}',${score}`);
    // 插入数据库
    let result = await query.query(add_sql);

    if (result.affectedRows == 1) {
        ctx.body = {
            code: 0,
            msg: 'success',
            result: result.insertId
        }
    } else {
        ctx.body = {
            code: 1,
            msg: 'error',
            result: null
        }
    }
});

router.get('/getcomment', async (ctx, next) => {
    let {
        type,
        pid
    } = ctx.request.query;

    if ([type, pid].includes(undefined)) {
        ctx.body = {
            code: 0,
            msg: '缺少参数',
            result: null
        }
        return;
    }
    // 字段过滤
    let field = 'username,avatar,c.id as cid,content,time'
    let comments = await query.query(sql.QUERY_TABLE('user u,comments c', field, `c.uid = u.id`));
    ctx.body = {
        code: 0,
        msg: 'success',
        result: comments
    }
})

module.exports = router;
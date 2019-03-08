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
        ctx.error('缺少参数');
        return;
    }
    // 获取当前时间戳
    let time = parseInt(Date.now() / 1000);

    let add_sql = sql.INERT_TABLE('comments', 'content,uid,pid,type,time,score', `'${content}',${uid},${pid},${type},'${time}',${score}`);
    // 插入数据库
    let result = await query.query(add_sql);

    if (result.affectedRows == 1) {
        ctx.success('success', result.insertId)
    } else {
        ctx.error('error');
    }
});

// 获取评论
router.get('/getcomment', async (ctx, next) => {
    let {
        type,
        pid
    } = ctx.request.query;

    if ([type, pid].includes(undefined)) {
        ctx.error('缺少参数');
        return;
    }
    // 字段过滤
    let field = 'username,avatar,c.id as cid,content,time'
    let comments = await query.query(sql.QUERY_TABLE('user u,comments c', field, `c.uid = u.id AND c.pid = ${pid} AND c.type = ${type}`));

    // 排序
    comments.sort((obj1, obj2) => {
        return obj2.time - obj1.time;
    })
    ctx.success('success', comments);
})

module.exports = router;
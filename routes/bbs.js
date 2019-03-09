const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 发布帖子
router.post('/post', async(ctx, next) => {
    let {
        title,
        intro,
        userid
    } = ctx.request.body;
    // 用户id
    if (!userid) {
        ctx.error('缺少userid');
        return;
    }
    // 发布时间
    let time = parseInt(Date.now() / 1000);

    let add_sql = sql.INERT_TABLE('post', 'title,intro,userid,time', `'${title}','${intro}',${userid},'${time}'`);
    let result = await query.query(add_sql);

    if (result.affectedRows == 1) {
        ctx.success('success', result.insertId);
    } else {
        ctx.success('error');
    }
})

// 获取单个/多个帖子
router.get('/getpost', async(ctx, next) => {
    let {
        pid
    } = ctx.request.query;

    // 批量帖子
    let query_sql = `SELECT p.*, u.username, u.avatar FROM post p,user u WHERE p.userid=u.id AND p.status=1 ORDER BY p.time DESC`;
    // 单个帖子详情,返回所有评论
    if (pid) {
        query_sql = `SELECT p.*, u.username, COUNT(*) AS replys, u.avatar
                        FROM post p,user u, comments c 
                        WHERE 
                        p.status=1 AND p.id=${pid} 
                        AND c.pid = p.id AND c.type = 0 
                        AND p.userid = u.id
        `;
    }

    // 获取所有帖子
    let result = await query.query(query_sql);
    if (pid) {
        // 单个帖子返回所有评论
        let c_sql = `SELECT c.content,c.time,u.username, u.avatar
                    FROM comments c, user u
                    WHERE c.pid = ${pid} AND c.type=0 AND c.uid = u.id 
                        `;
        result[0].comments = await query.query(c_sql);
    }
    ctx.success('', result);
})

// 帖子点击量
router.get("addClick", async(ctx, next) => {
    let list_id = ctx.query.id
    if (list_id) {
        let add_sql = `update post set clicks = clicks + 1 where id=${list_id}`
        await query.query(add_sql)
    }
    ctx.success();
})
module.exports = router;
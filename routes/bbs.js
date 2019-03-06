const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

// 发布帖子
router.post('/post', async (ctx, next) => {
    let {
        title,
        intro,
        userid
    } = ctx.request.body;
    // 用户id
    if (!userid) {
        ctx.body = {
            code: 1,
            msg: '缺少userid',
            result: null
        }
        return;
    }
    // 发布时间
    let time = parseInt(Date.now() / 1000);

    let add_sql = sql.INERT_TABLE('post', 'title,intro,userid,time', `'${title}','${intro}',${userid},'${time}'`);
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
})

// 获取单个/多个帖子
router.get('/getpost', async (ctx, next) => {
    let {
        pid
    } = ctx.request.query;

    // 批量帖子
    let query_sql = `SELECT p.*, u.username FROM post p,user u WHERE p.userid=u.id AND p.status=1 ORDER BY p.time DESC`;
    // 单个帖子详情,返回所有评论及评论
    if (pid) {
        query_sql = `SELECT p.*, u.username, COUNT(*) AS replys 
                        FROM post p,user u, comments c 
                        WHERE 
                        p.status=1 AND p.id=${pid} 
                        AND c.pid = p.id AND c.type = 0 
                        AND c.uid = u.id
        `;
    }

    // 获取所有帖子
    let result = await query.query(query_sql);
    if (pid) {
        // 单个帖子返回所有评论
        let c_sql = `SELECT c.content,c.time,u.username 
                    FROM comments c, user u
                    WHERE c.pid = ${pid} AND c.type=0 AND c.uid = u.id 
                        `;
        result[0].comments = await query.query(c_sql);
    }
    ctx.body = {
        code: 0,
        msg: '',
        result
    }
})

module.exports = router;
const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');
const md5 = require('md5');

// 注册用户
router.post('/add', async (ctx, next) => {
    let {
        username,
        password
    } = ctx.request.body;

    // 空值判断
    if (!username || !password) {
        ctx.error('用户名、密码不能为空')
    }
    // 用户是否存在
    let hasUser = await query.query(sql.QUERY_TABLE('user', 'username', `username='${username}'`));
    if (hasUser.length) {
        ctx.error('用户名已存在')
        return;
    }

    let add_sql = sql.INERT_TABLE('user', 'username,password', `'${username}','${md5(password)}'`);
    // 插入数据库
    let result = await query.query(add_sql);

    if (result.affectedRows == 1) {
        ctx.success('注册成功', result.insertId);
    } else {
        ctx.error('注册失败');
    }
})

// 用户登录
router.get('/login', async (ctx, next) => {
    let {
        username,
        password
    } = ctx.request.query;
    let hasUser = await query.query(sql.QUERY_TABLE('user', 'id,username,tag', `username='${username}' AND password='${md5(password)}'`));

    if (hasUser.length) {
        ctx.success('登录成功', hasUser[0]);
    } else {
        ctx.error('用户名或者密码错误');
    }
})

// 获取所有标签
router.get('/getTags', async (ctx, next) => {
    let tags = await query.query(sql.QUERY_TABLE('tag', 'tid,name', 'status=1'));
    ctx.success('', tags);
})

// 用户行为记录
router.get('/action', async (ctx, next) => {
    let {
        userid,
        tid
    } = ctx.request.query;
    // 用户是否存在
    let hasUser = await query.query(sql.QUERY_TABLE('user', 'id,username,tag', `id=${userid}`));
    if (hasUser.length) {
        let time = parseInt(Date.now() / 1000);
        let add_sql = sql.INERT_TABLE('action', 'uid,tid,time', `'${userid}','${tid}','${time}'`);
        let result = await query.query(add_sql);
    }
    ctx.success();
})

// 设置用户标签
router.post('/setTag', async (ctx, next) => {
    let {
        userid,
        tid
    } = ctx.request.body;

    if (!userid || !tid) {
        ctx.error('缺少参数');
        return;
    }
    let result = await query.query(sql.UPDATE_TABLE('user', `tag='${tid}'`, `id=${userid}`));
    // 添加成功
    if (result.affectedRows) {
        ctx.success('添加标签成功');
    } else {
        ctx.error('添加标签失败');
    }
})

// 获取用户信息
router.get('/info', async (ctx, next) => {
    let userid = ctx.query.id;
    if (!userid) {
        ctx.error("缺少参数");
        return;
    }
    let user = await query.query(sql.QUERY_TABLE('user', 'id,username,avatar,tag,email', `id=${userid}`));
    ctx.success("", user);
})

/**
 * 修改用户信息
 */
router.post('/edit', async (ctx, next) => {
    let {
        data,
        userid
    } = ctx.request.body;

    if (!data || !userid) {
        ctx.error("缺少参数");
        return;
    }

    let params = JSON.parse(data);
    let fields = [];

    for (let item in params) {
        if (item == 'password') {
            fields.push(`password='${md5(params[item])}'`);
        } else {
            fields.push(`${item}='${params[item]}'`);
        }
    }
    let result = await query.query(sql.UPDATE_TABLE('user', fields.join(','), `id=${userid}`));
    // 修改成功
    if (result.affectedRows) {
        ctx.success('修改成功');
    } else {
        ctx.error('修改失败');
    }
})


module.exports = router;
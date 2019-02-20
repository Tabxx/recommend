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
        ctx.body = {
            code: 0,
            msg: '用户名、密码不能为空',
            result: null
        }
    }
    // 用户是否存在
    let hasUser = await query.query(sql.QUERY_TABLE('user', 'username', `username='${username}'`));
    if (hasUser.length) {
        ctx.body = {
            code: 0,
            msg: '用户名已存在',
            result: null
        }
        return;
    }

    let add_sql = sql.INERT_TABLE('user', 'username,password', `'${username}','${md5(password)}'`);
    // 插入数据库
    let result = await query.query(add_sql);

    if (result.affectedRows == 1) {
        ctx.body = {
            code: 0,
            msg: '注册成功',
            result: result.insertId
        }
    } else {
        ctx.body = {
            code: 1,
            msg: '注册失败',
            result: null
        }
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
        ctx.body = {
            code: 0,
            msg: '登录成功',
            result: hasUser[0]
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '用户名或者密码错误',
            result: null
        }
    }
})

// 获取所有标签
router.get('/getTags', async (ctx, next)=>{
	let tags = await query.query(sql.QUERY_TABLE('tag', 'tid,name', 'status=1'));
	ctx.body = {
		code: 0,
		msg: '',
		result: tags
	}
})

// 用户行为记录
router.get('/action', async (ctx, next)=>{
	let {userid, tid} = ctx.request.query;
	let add_sql = sql.INERT_TABLE('action', 'uid,tid', `'${userid}','${tid}'`);
    ctx.body = {
		code: 0,
		msg:'',
		result: null
	}
})

module.exports = router;
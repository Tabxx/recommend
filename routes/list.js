const router = require('koa-router')()
const sql = require('../utils/sql')
const query = require('../utils/query')
const utils = require('../utils/utils')

// 添加方案列表
router.post('/add', async (ctx, next) => {
    let param = ctx.request.body

    // 用户信息
    if (!param.userid) {
        ctx.error('用户信息不存在')
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
        ctx.success('添加成功', result.insertId);
    } else {
        ctx.error('添加失败');
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
        let sql = `SELECT l.*, u.username, u.avatar from list l, user u WHERE l.userid = u.id and l.id = ${id}`;
        // 单个方案详情
        // list = await query.query(sql.QUERY_TABLE('list', '*'))
        list = await query.query(sql)
    } else {
        // 多个方案详情
        list = await query.query(sql.QUERY_TABLE('list', '*', `id in (${id})`))
    }

    ctx.success('', list);
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
    ctx.success();
})

/**
 * 个性化推荐
 * 传入userid
 */
router.get('/recommend', async (ctx, next) => {
    let {
        userid
    } = ctx.request.query;

    // 未传userid
    if (!userid) {
        ctx.error('userid不存在')
        return;
    }

    // 获取用户自身标签
    let userTags = await query.query(sql.QUERY_TABLE('user', 'tag', `id=${userid}`));

    // 标签集合
    let tags = userTags[0].tag.split(',');
    // 去除split生成空字符串问题
    if (tags.length === 1 && tags[0] == '') {
        tags = [];
    }

    // 用户行为标签集合
    let actionTags = await query.query(sql.QUERY_TABLE('action', 'tid', `uid=${userid}`));
    actionTags.map(item => {
        tags = tags.concat(item.tid.split(','));
    })

    // 标签统计
    let tagscount = [];

    tags.map(item => {
        let index = tagscount.findIndex(obj => obj.tid == item)
        if (index === -1) {
            tagscount.push({
                tid: item,
                nums: 1
            });
        } else {
            tagscount[index].nums++;
        }
    });

    // 标签排序
    tagscount.sort((obj1, obj2) => {
        return obj2.nums - obj1.nums;
    });

    // 用户行为总和
    const actions = tagscount.reduce((n, m) => n + m.nums, 0);

    // 标签使用率计算
    tagscount.map(item => {
        item.rate = item.nums / actions;
    });

    // 取标签使用率大于60%，且排名前二的标签
    let topTwoTags = tagscount.filter(item => item.rate >= 0.6).slice(0, 2);

    // 如果没有大于60%的使用概率，取前2推荐
    if (topTwoTags.length === 0) {
        topTwoTags = tagscount.slice(0, 2);
    }

    // 最终推荐标签
    let finalTags = [];
    topTwoTags.map(item => finalTags.push(item.tid));

    // 新用户未设置标签且没有任何行为，随机获取标签
    if (finalTags.length == 0) {
        let all_tags = await utils.QUERY_COUNT('tag', '*');
        finalTags.push(Math.ceil(Math.random() * all_tags[0].total));
        finalTags.push(Math.ceil(Math.random() * all_tags[0].total));
    }

    // 标签数小于2时
    if (finalTags.length == 1) {
        let all_tags = await utils.QUERY_COUNT('tag', '*');
        finalTags.push(Math.ceil(Math.random() * all_tags[0].total));
    }

    // 查询对应方案
    let rsql = `select DISTINCT l.*,u.username from list l, user u 
                where ( FIND_IN_SET(${finalTags[1]}, l.tag) or FIND_IN_SET(${finalTags[0]}, l.tag)) 
                and l.userid = u.id`;
    let recommend = await query.query(rsql);
    // 去重
    let hash = {};
    let result = recommend.reduce((item, value) => {
        hash[value.id] ? '' : hash[value.id] = value.id && item.push(value);
        return item;
    }, []);

    // 按推荐标签相似度排序
    result = result.sort((l1, l2) => {
        return tagCompare(l2.tag.split(','), finalTags) - tagCompare(l1.tag.split(','), finalTags)
    })
    // 最多返回三个
    result = result.length > 3 ? result.slice(0, 3) : result;
    ctx.success('', result)
})

/**
 * 数组相似度比较
 * @param {*} target 目标数组
 * @param {*} source 原数组
 */
function tagCompare(target, source) {
    let count = 0;
    target && target.map(item => {
        if (source.some(value => item == value)) {
            count++;
        }
    })

    return count;
}


module.exports = router
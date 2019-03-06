const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');
// 时间插件
const moment = require('moment');

// 硬件信息统计
router.get('/hardcount', async (ctx, next) => {
    let cpu_count = await utils.QUERY_COUNT('cpu', '*', 'status=1');
    let graphics_count = await utils.QUERY_COUNT('graphics', '*', 'status=1');
    let mainboard_count = await utils.QUERY_COUNT('mainboard', '*', 'status=1');
    let memory_count = await utils.QUERY_COUNT('memory', '*', 'status=1');
    let harddisk_count = await utils.QUERY_COUNT('hard_disk', '*', 'status=1');

    let result = [{
            name: 'CPU',
            value: cpu_count[0].total
        },
        {
            name: '显卡',
            value: graphics_count[0].total
        },
        {
            name: '主板',
            value: mainboard_count[0].total
        },
        {
            name: '硬盘',
            value: harddisk_count[0].total
        },
        {
            name: '内存条',
            value: memory_count[0].total
        },
    ]

    ctx.body = {
        code: 0,
        msg: '',
        result
    }
})

// 管理员获取所有方案列表
router.get('/getlist', async (ctx, next) => {
    let result = await query.query(sql.QUERY_TABLE('list', '*', 'status=1'));
    ctx.body = {
        code: 0,
        msg: '',
        result
    }
})

// 获取所有硬件列表
router.get('/gethardware', async (ctx, next) => {
    let cpu = await query.query(sql.QUERY_TABLE('cpu', '*', 'status=1'));
    let graphics = await query.query(sql.QUERY_TABLE('graphics', '*', 'status=1'));
    let mainboard = await query.query(sql.QUERY_TABLE('mainboard', '*', 'status=1'));
    let harddisk = await query.query(sql.QUERY_TABLE('hard_disk', '*', 'status=1'));
    let memory = await query.query(sql.QUERY_TABLE('memory', '*', 'status=1'));

    ctx.body = {
        code: 0,
        msg: '',
        result: {
            cpu,
            graphics,
            mainboard,
            harddisk,
            memory
        }
    }
})

// 用户日点击量
router.get('/dayclick', async (ctx, next) => {
    let actions = await query.query(sql.QUERY_TABLE('action', '*'));
    let clicks = [];

    for (let item of actions) {
        item.date = moment(item.time * 1000).format('YYYY-MM-DD');

        let index = clicks.findIndex(action => action.date == item.date);
        if (index > -1) {
            clicks[index].clicks++;
        } else {
            clicks.push({
                date: item.date,
                clicks: 0
            })
        }
    }
    ctx.body = {
        code: 0,
        msg: '',
        result: clicks
    }
})

module.exports = router;
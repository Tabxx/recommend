const router = require('koa-router')()
const sql = require('../utils/sql');
const query = require('../utils/query');
const utils = require('../utils/utils');

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

module.exports = router;
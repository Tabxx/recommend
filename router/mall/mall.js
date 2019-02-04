const router = require('koa-router')()

router.get('/', (ctx) => {
    ctx.body = "<h1>硬件列表</h1>"
})

router.get('/add', (ctx) => {
    ctx.body = "<h1>添加硬件</h1>"
})

module.exports = router
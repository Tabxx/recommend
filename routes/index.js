const router = require('koa-router')();
const sql = require('../utils/sql');
const query = require('../utils/query');

router.get('/', async(ctx, next) => {
    console.log(await query.query(sql.QUERY_TABLE('kms_users')));
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
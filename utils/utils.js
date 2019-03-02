const sql = require('../utils/sql');
const query = require('../utils/query');

/**
 * 查询硬件列表
 * @param {*} ctx 
 * @param {*} tablename 数据表名称
 */
const QUERY_HARDWARE = async (ctx, tablename) => {
    // 获取参数
    let params = ctx.request.query;
    let where = [];
    for (let item in params) {
        // 价格区间
        if (item.toLocaleLowerCase() == 'price') {
            let prices = params.price.split('-');
            if (prices.length < 2) {
                where.push(`${item} = ${params.price}`)
            } else {
                where.push(`${item} BETWEEN ${prices[0]} AND ${prices[1]}`)
            }
        } else if (!['page', 'pageSize'].includes(item)) {
            where.push(`${item} = '${params[item]}'`)
        }
    }
    let limit = '';
    if (params['page']) {
        params['pageSize'] = params['pageSize'] || 10;
        limit = ` limit ${(params['page']-1) * params['pageSize']},${params['pageSize']}`
    }
    where.push(`status=1`);
    // 查询符合条件的列表
    let lists = await query.query(sql.QUERY_TABLE(tablename, '*', where.join(' AND ')) + limit)

    return lists;
}

const QUERY_TYPES = async (tablename, field, format) => {
    // 字段分割
    let fields = field.split(',');
    let types = []

    for (let item of fields) {
        // 查询字段
        let col = await query.query(`SELECT ${item} from ${tablename} GROUP BY ${item ? item : 'id'} HAVING count(id)>0`);
        // 去重
        types.push({
            title: format[item],
            data: Array.from(new Set(col))
        });
    }
    return types;
}

/**
 * 表数据统计
 * @param {*} tablename 表名
 * @param {*} field 统计字段
 * @param {*} where where条件
 */
const QUERY_COUNT = async (tablename, field = '*', where) => {
    if (where) {
        return await query.query(`SELECT COUNT(${field}) as total FROM ${tablename} WHERE ${where}`)
    } else {
        return await query.query(`SELECT COUNT(${field}) as total FROM ${tablename}`)
    }

}

module.exports = {
    QUERY_HARDWARE,
    QUERY_TYPES,
    QUERY_COUNT
}
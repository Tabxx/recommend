const sql = require('../utils/sql');
const query = require('../utils/query');

/**
 * 查询硬件列表
 * @param {*} ctx 
 * @param {*} tablename 数据表名称
 */
const QUERY_HARDWARE = async(ctx, tablename) => {
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
        } else {
            where.push(`${item} = '${params[item]}'`)
        }
    }

    // 查询符合条件的列表
    let lists = await query.query(sql.QUERY_TABLE(tablename, '*', where.join(' AND ')))

    return lists;
}

const QUERY_TYPES = async(tablename, field, format) => {
    let fields = field.split(',');
    let types = []

    for (let item of fields) {
        console.log(`SELECT ${item} from ${tablename} GROUP BY ${item} HAVING count(id)>0`)
        let col = await query.query(`SELECT ${item} from ${tablename} GROUP BY ${item} HAVING count(id)>0`);
        types.push({
            title: format[item],
            data: Array.from(new Set(col))
        });
    }
    return types;
    // 查询符合条件的列表
    // let types = await query.query(sql.QUERY_TABLE(tablename, '*', where.join(' AND ')))
}

module.exports = {
    QUERY_HARDWARE,
    QUERY_TYPES
}
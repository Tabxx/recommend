/**
 * 查询数据
 * @param {*} tablename 表名
 * @param {*} fields 过滤字段，默认不过滤
 * @param {*} where 条件
 */
const QUERY_TABLE = (tablename, fields = "*", where) => {
    // return `SELECT ${fields.join(',')} FROM ${tablename} where ${where}`;

    if (where && where != 'undefined') {
        return `SELECT ${fields} FROM ${tablename} WHERE ${where}`
    } else {
        return `SELECT ${fields} FROM ${tablename}`;
    }
};

/**
 * 插入数据
 * @param {*} tablename 表名
 * @param {*} key 字段名
 * @param {*} val 数值
 */
const INERT_TABLE = (tablename, key, val) => `INSERT INTO ${tablename} (${key}) VALUES (${val})`;

/**
 * 更新数据
 * @param {*} tablename 表名
 * @param {*} set 更新值
 * @param {*} where 条件
 */
const UPDATE_TABLE = (tablename, set, where) => `UPDATE ${tablename} SET ${set} WHERE ${where}`;

module.exports = {
    QUERY_TABLE,
    INERT_TABLE,
    UPDATE_TABLE
}
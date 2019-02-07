// 查询数据表
const QUERY_TABLE = (tablename, fields = "*", where) => {
    // return `SELECT ${fields.join(',')} FROM ${tablename} where ${where}`;

    if (where && where != 'undefined') {
        return `SELECT ${fields} FROM ${tablename} WHERE ${where}`
    } else {
        return `SELECT ${fields} FROM ${tablename}`;
    }
};

const INERT_TABLE = (tablename, key, val) => `INSERT INTO ${tablename} (${key}) VALUES (${val})`;

module.exports = {
    QUERY_TABLE,
    INERT_TABLE
}
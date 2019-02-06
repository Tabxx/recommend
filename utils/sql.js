// 查询数据表
const QUERY_TABLE = (tablename, fields = "*", where) => {
    // return `SELECT ${fields.join(',')} FROM ${tablename} where ${where}`;
    if (where) {
        console.log(`SELECT ${fields} FROM ${tablename} WHERE ${where}`);
        return `SELECT ${fields} FROM ${tablename} WHERE ${where}`
    } else {
        return `SELECT ${fields} FROM ${tablename}`;
    }
};

module.exports = {
    QUERY_TABLE
}
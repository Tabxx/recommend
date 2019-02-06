const config = require('../config/db');
const mysql = require('mysql');

// 连接数据库
const pool = mysql.createPool(config);

// 查询语句
const query = async(sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, val, (err, fields) => {
                    if (err) reject(err);
                    else resolve(fields);
                    connection.release();
                })
            }
        })
    })
}

module.exports = {
    query
}
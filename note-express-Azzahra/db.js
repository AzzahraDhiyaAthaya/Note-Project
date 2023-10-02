const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ZaHrA011",
    host : "localhost",
    port: 5432,
    database: "Catatan"
});

module.exports = pool;
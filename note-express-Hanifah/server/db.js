const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "HaNi_15*",
    host: "localhost",
    posrt: 5432,
    database: "percobaan"
});

module.exports = pool;
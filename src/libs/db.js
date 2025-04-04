import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "task",
    password: process.env.DB_PASSWORD  || "1111",
    port: process.env.DB_PORT || 5432,
});

console.log(process.env.DB_USER);

export default pool;
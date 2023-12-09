import { createPool } from "mysql2/promise";

export const pool= createPool({
    user:'root',
    password:"Guerrero9603",
    host: 'localhost',
    port: 3306,
    database: 'djhones'


})

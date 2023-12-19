import { createPool } from "mysql2/promise"

export const pool = createPool({
    host:'localhost',
    user:'root',
    password:'Guerrero9603',
    port:'3306',
    database:'djhones'
})
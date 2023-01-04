import config from "./config.js";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(config.db);

const [employees] = await connection.execute(
  "SELECT * from employees LIMIT 10"
);
console.log(employees);

connection.end();

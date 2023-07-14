import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'chatbot',
  database: process.env.MYSQLDATABASE || 'chatbot',
  host: process.env.MYSQLHOST_CONTAINER || process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  logging: false,
};

export = config;
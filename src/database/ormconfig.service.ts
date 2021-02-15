import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

function isProduction() {
  return process.env.MODE == 'production';
}

export const mysql: TypeOrmModuleOptions = {
  name: 'mysqlConnection',
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export const mongo: TypeOrmModuleOptions = {
  name: 'mongoConnection',
  type: 'mongodb',
  url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.hg0lb.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
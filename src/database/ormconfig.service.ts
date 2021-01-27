
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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
  ssl: isProduction(),
  migrationsRun: true
};

export const mongo: TypeOrmModuleOptions = {
  name: 'mongoConnection',
  type: 'mongodb',
  url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nxqev.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
  ssl: isProduction(),
  useNewUrlParser: true,
  useUnifiedTopology: true,
  migrationsRun: true
};

import { mysql, mongo } from '../database/ormconfig.service';
import fs = require('fs');

const mysqlConfig = { ...mysql };
const mongoConfig = { ...mongo };

mysqlConfig.entities = ['./src/database/mysql/entities/*.entity.{ts,js}'];
mysqlConfig.migrations = ['./src/database/mysql/migrations/*.ts'];
mysqlConfig.cli = { 
  entitiesDir: './src/database/mysql/entities',
  migrationsDir: './src/database/mysql/migrations'
};

mongoConfig.entities = ['./src/database/mongo/entities/*.entity.{ts,js}'];
mongoConfig.migrations = ['./src/database/mongo/migrations/*.ts'];
mongoConfig.cli = { 
  entitiesDir: './src/database/mongo/entities',
  migrationsDir: './src/database/mongo/migrations'
};


fs.writeFileSync('ormconfig.json',
  `[${JSON.stringify(mysqlConfig, null, 2)},${JSON.stringify(mongoConfig, null, 2)}]`
);
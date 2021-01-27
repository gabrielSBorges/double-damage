import { createConnection } from 'typeorm';

const [mysql, mongo] = require('../../ormconfig.json');

const mysqlConfig = { ...mysql };
const mongoConfig = { ...mongo };

mysqlConfig.entities = ['./mysql/entities/*.ts'];
mysqlConfig.migrations = ['./mysql/migrations/*.ts'];
mysqlConfig.cli = { 
  entitiesDir: './mysql/entities',
  migrationsDir: './mysql/migrations'
};

mongoConfig.entities = ['./mongo/entities/*.ts'];
mongoConfig.migrations = ['./mongo/migrations/*.ts'];
mongoConfig.cli = { 
  entitiesDir: './mongo/entities',
  migrationsDir: './mongo/migrations'
};

export const databaseProvider = [
  {
    provide: 'MYSQL_CONNECTION',
    useFactory: async () => await createConnection(mysqlConfig),
  },
  {
    provide: 'MONGO_CONNECTION',
    useFactory: async () => await createConnection(mongoConfig),
  },
];
import { User } from 'src/database/mysql/entities/users.entity';
import { Connection, Repository } from 'typeorm';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['MYSQL_CONNECTION'],
  },
];
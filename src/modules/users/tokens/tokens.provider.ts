import { Token } from 'src/database/mongo/entities/tokens.entity';
import { Connection, Repository } from 'typeorm';

export const tokenProvider = [
  {
    provide: 'TOKEN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Token),
    inject: ['MONGO_CONNECTION'],
  },
];
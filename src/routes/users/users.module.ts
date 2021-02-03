import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './users.provider';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';


@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...userProvider,
    UsersResolver,
    UsersService
  ]
})

export class UsersModule {}
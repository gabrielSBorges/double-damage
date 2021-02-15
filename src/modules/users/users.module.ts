import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { tokenProvider } from './tokens/tokens.provider';
import { TokensService } from './tokens/tokens.service';
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
    UsersService,
    ...tokenProvider,
    TokensService
  ]
})

export class UsersModule {}
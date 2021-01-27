import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './routes/users/users.module';

const routes = [
  UsersModule
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    ...routes,
  ],
})

export class AppModule {}
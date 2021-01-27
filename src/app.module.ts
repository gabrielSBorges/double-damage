import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './routes/users/users.module';


const routes = [
  
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    ...routes,
    UsersModule
  ],
})

export class AppModule {}
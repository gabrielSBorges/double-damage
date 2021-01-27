import { Controller, Get } from '@nestjs/common';
import { User } from 'src/database/mysql/entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.service.findAll();
  }
}
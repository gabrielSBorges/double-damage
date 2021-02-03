import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/database/mysql/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async login(user: User): Promise<User> {
    return this.userRepository.createQueryBuilder('users')
      .where('users.email = :userEmail', { userEmail: user.email })
      .andWhere('users.password = :userPassword', { userPassword: user.password })
      .getOne();
  }
}
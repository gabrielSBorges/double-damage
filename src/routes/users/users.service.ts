import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/database/mysql/entities/users.entity';
import { Repository } from 'typeorm';
import { loginValidation, signupValidation } from './users.yup';
import { userUtils } from './users.utils';
import { polyglot } from 'polyglot-rpg';


@Injectable()
export class UsersService {
	constructor(
		@Inject('USER_REPOSITORY')
		private userRepository: Repository<User>,
	) {}

	public async create(user: User): Promise<User> {
		await signupValidation.validate(user);

		user.password = await userUtils.hashPassword(user._password);
		
		return this.userRepository.save(user);
	}

	public async login(loginUser: User): Promise<User> {
		await loginValidation.validate(loginUser);

		const databaseUser = await this.userRepository.findOne({ email: loginUser.email });
		
		if (databaseUser) {
			loginUser.password = await userUtils.hashPassword(loginUser._password);

			const samePassword = await userUtils.comparePassword(databaseUser.password, loginUser.password);

			if (samePassword) {
				return databaseUser;
			}
		}
			
		throw new BadRequestException(polyglot.users.locale('user_not_found', 'ptBR'));
	}

	public async findUser(id: number): Promise<User> {
		return this.userRepository.findOneOrFail(id);
	}

	public async findUsers(ids: number[]): Promise<User[]> {
		return this.userRepository.findByIds(ids);
	}
}
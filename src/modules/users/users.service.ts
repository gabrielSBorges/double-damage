import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/database/mysql/entities/users.entity';
import { Repository } from 'typeorm';
import { loginValidation, signupValidation } from './users.yup';
import { polyglot } from 'polyglot-rpg';
import { databaseError } from 'src/database/database.error';
import { LoginResponse } from 'src/classes/LoginResponse';
import { LoginBody } from 'src/classes/LoginBody';
import { TokensService } from './tokens/tokens.service';
import { bcrypt } from 'src/utils/bcrypt';


@Injectable()
export class UsersService {
	constructor(
		@Inject('USER_REPOSITORY')
		private userRepository: Repository<User>,
		private tokenService: TokensService
	) {}

	public async create(user: User): Promise<User> {
		await signupValidation.validate(user);

		user.password = await bcrypt.hashString(user._password);
		
		return this.userRepository.save(user)
			.catch(error => {
				throw databaseError(error)
			});
	}

	public async login({ email, password, expires }: LoginBody): Promise<LoginResponse> {
		await loginValidation.validate({ email, password, expires });

		const databaseUser = await this.userRepository.findOne({ email });
		
		if (databaseUser) {
			const samePassword = await bcrypt.compareStringToHash(password, databaseUser.password);
			
			if (samePassword) {
				const token = await this.tokenService.create(databaseUser, expires);
				
				return new LoginResponse(
					polyglot.users.locale('loging_successful', 'ptBR'),
					token
				);
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
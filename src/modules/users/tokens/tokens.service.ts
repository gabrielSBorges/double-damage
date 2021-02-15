import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from 'src/database/mongo/entities/tokens.entity';
import { User } from 'src/database/mysql/entities/users.entity';
import * as jwt from 'jsonwebtoken';
import { bcrypt } from 'src/utils/bcrypt';
import { databaseError } from 'src/database/database.error';
require('dotenv').config();


@Injectable()
export class TokensService {
	constructor(
		@Inject('TOKEN_REPOSITORY')
		private tokenRepository: Repository<Token>,
	) {}

	public async create({ id, name, email }: User, expiresIn: number = 84000): Promise<string> {
		const token = jwt.sign(
			{
				id,
				name,
				email
			},
				process.env.JWT_KEY,
			{
				expiresIn
			}
		);

		const encryptedToken = await bcrypt.hashString(token);

		const tokenBody: Token = {
			token: encryptedToken,
			user_id: id
		}

		return this.tokenRepository.save(tokenBody)
			.then(() => token)
			.catch(error => {
				throw databaseError(error);
			});
    }

    public async delete() {

    }
}
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { polyglot } from 'polyglot-rpg';

export const userUtils = {
    async hashPassword(password: string): Promise<string> {
		let passwordHash = '';
		
		await bcrypt.hash(password, 10)
			.then(hash => {
				passwordHash = hash;
			})
			.catch(() => {
				throw new BadRequestException(polyglot.users.locale('internal_server_error', 'ptBR'));
			})
		
		return passwordHash;
	},

	async comparePassword(userPassword: string, loginPassword: string) {
		let samePassword = false;

		await bcrypt.compare(userPassword, loginPassword)
			.then(response => {
				samePassword = response.valueOf();
			})
			.catch(() => {
				throw new BadRequestException(polyglot.users.locale('user_not_found', 'ptBR'));
			})

		return samePassword;
	}
}
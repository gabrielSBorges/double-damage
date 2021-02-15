import { BadRequestException } from '@nestjs/common';
import { polyglot } from 'polyglot-rpg';
import * as bc from 'bcrypt';

export const bcrypt = {
    async hashString(password: string): Promise<string> {	
		return await bc.hash(password, 10)
			.then(hash => hash)
			.catch(() => {
				throw new BadRequestException(polyglot.misc.locale('internal_server_error', 'ptBR'));
			});
	},

	async compareStringToHash(loginPassword: string, userPassword: string): Promise<boolean> {
		return await bc.compare(loginPassword, userPassword)
			.then(response => response)
			.catch(() => {
				throw new BadRequestException(polyglot.misc.locale('internal_server_error', 'ptBR'));
			});
	}
}
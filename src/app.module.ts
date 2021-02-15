import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { UsersModule } from './modules/users/users.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			playground: true,
			autoSchemaFile: 'src/schema.gql',
			formatError: (error: GraphQLError): GraphQLFormattedError => {
				const graphQLFormattedError: GraphQLFormattedError = {
					message: error.extensions.exception.message,
				};

				return graphQLFormattedError;
			},
		}),
		UsersModule,
	],
})

export class AppModule {}
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { UsersModule } from './routes/users/users.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			playground: true,
			autoSchemaFile: 'src/schema.gql',
			formatError: (error: GraphQLError): GraphQLFormattedError => {
				const graphQLFormattedError: GraphQLFormattedError = {
					message: error.extensions.exception.response.message || error.extensions.code,
					extensions: {
						code: error.extensions.code,
						statusCode: error.extensions.exception.response.statusCode
					}
				};

				return graphQLFormattedError;
			},
		}),
		UsersModule
	],
})

export class AppModule {}
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolvers } from './resolvers/resolvers';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => ({
        typePaths: ['apps/api/src/app/graphql/*.gql'],
        autoSchemaFile: join(
          process.cwd(),
          'apps/api/src/app/graphql/schema.gql'
        ),
        definitions: {
          path: join(process.cwd(), 'apps/api/src/app/graphql/graphql.ts'),
          outputAs: 'class',
          emitTypenameField: true,
        },
        debug: true,
        playground: false,
        plugins: [
          ApolloServerPluginLandingPageLocalDefault({
            embed: true,
          }),
        ],
        sortSchema: true,
      }),
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: process.env.TYPEORM_HOST || '33.33.0.8',
        port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
        username: 'lodictio-main-db-user',
        password: '123456',
        database: 'lodictio-main-db',
        entities: [join(process.cwd(), 'apps/api/src/entities/*.ts')],
        synchronize: false,
      }),
    }),
  ],
  controllers: [],
  providers: [...resolvers],
})
export class AppModule {}

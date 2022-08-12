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
        typePaths: ['apps/api/src/app/graphql/*.graphql'],
        autoSchemaFile: join(
          process.cwd(),
          'apps/api/src/app/graphql/schema.graphql'
        ),
        definitions: {
          path: join(process.cwd(), 'apps/api/src/app/graphql/graphql.ts'),
          outputAs: 'class',
          emitTypenameField: true,
        },
        debug: true,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        sortSchema: true,
      }),
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
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

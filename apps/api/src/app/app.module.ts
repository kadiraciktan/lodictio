import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { resolvers } from '../resolvers/resolvers';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['apps/api/src/graphql/*.graphql'],
      autoSchemaFile: join(
        process.cwd(),
        'apps/api/src/graphql/schema.graphql'
      ),
      definitions: {
        path: join(process.cwd(), 'apps/api/src/graphql/graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
      debug: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [...resolvers],
})
export class AppModule {}

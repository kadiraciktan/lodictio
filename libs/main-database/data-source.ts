import { DataSource } from 'typeorm';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'lodictio-main-db-user',
  password: '123456',
  database: 'lodictio-main-db',
  synchronize: false,
  logging: true,
  entities: ['./dist/libs/main-database/src/entities/**/*.entity{.ts,.js}'],
  migrations: ['./dist/libs/main-database/src/migrations/**/*{.ts,.js}'],
  subscribers: [
    './dist/libs/main-database/src/subscribers/**/*.subscriber{.ts,.js}',
  ],
});

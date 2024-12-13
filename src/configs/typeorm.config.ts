import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'db0user',
  password: 'db0password',
  database: 'db0',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

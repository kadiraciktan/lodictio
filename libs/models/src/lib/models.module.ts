import { Module } from '@nestjs/common';
import { User } from './user.model';

@Module({
  controllers: [],
  providers: [],
  exports: [User],
})
export class ModelsModule {}

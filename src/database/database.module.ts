import { Module } from '@nestjs/common';
import { dbConfig } from './database.config';

@Module({
  exports: [dbConfig]
})
export class DatabaseModule {
}

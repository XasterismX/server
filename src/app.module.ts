import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { dbConfig } from './database/database.config';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forRoot(new DataSource(dbConfig()).options)],
})
export class AppModule {}

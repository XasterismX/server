import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as process from 'node:process';
import * as path from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';

config({path: path.join(process.cwd(), ".env")})

const confService = new ConfigService()

export const dbConfig = (): DataSourceOptions =>{
  const url = confService.get("DATABASE_URL");

  if (!url){
    throw new Error("Missing database URL");
  }
  return {
    url,
    type: 'postgres',
    schema: "public",
    logging: true,
    entities: [path.join(process.cwd(), "dist", 'entities', "**", "*.entity.{js, ts}")],
    migrations: [path.join(process.cwd(), "migrations","**", "*.migration.{ts,js}")],
    migrationsRun: true,
    migrationsTableName: 'migrations',

  }

}

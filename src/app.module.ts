import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './modules/health/health.module';
import { LoggingInterceptor } from './common/logging.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorLogModule } from './visitor-log/visitor-log.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST, // Use your PostgreSQL host
      port: 5432,        // Use your PostgreSQL port
      username: process.env.POSTGRES_USER, // Use your PostgreSQL username
      password: process.env.POSTGRES_PASSWORD, // Use your PostgreSQL password
      database: process.env.POSTGRES_DB, // Use your PostgreSQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entities (models)
      synchronize: true, // Be careful with this in production!
    }),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    HealthModule,
    VisitorLogModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
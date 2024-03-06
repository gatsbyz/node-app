import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './modules/health/health.module';
import { LoggingInterceptor } from './common/logging.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorLogModule } from './modules/visitor-log/visitor-log.module';
import typeorm from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
      // synchronize: true, // Be careful with this in production!
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
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
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorLogService } from './visitor-log.service';
import { VisitorLogController } from './visitor-log.controller';
import { VisitorLog } from './entities/visitor-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorLog])],
  controllers: [VisitorLogController],
  providers: [VisitorLogService],
})
export class VisitorLogModule {}
import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { VisitorLogService } from './visitor-log.service';
import { VisitorLog } from './entities/visitor-log.entity';

@Controller('visitor-log')
export class VisitorLogController {
  constructor(private readonly visitorLogService: VisitorLogService) {}

  @Post()
  @HttpCode(201)
  async createLog(@Body('ip') ip: string): Promise<VisitorLog> {
    return this.visitorLogService.createLog(ip);
  }

  @Get()
  async getAllLogs(): Promise<VisitorLog[]> {
    return this.visitorLogService.getAllLogs();
  }
}
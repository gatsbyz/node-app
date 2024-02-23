import { Controller, Get, Post, Body, Req, HttpCode } from '@nestjs/common';
import { VisitorLogService } from './visitor-log.service';
import { VisitorLog } from './entities/visitor-log.entity';
import { Request } from 'express'; // Import Request from express

@Controller('visitor-log')
export class VisitorLogController {
  constructor(private readonly visitorLogService: VisitorLogService) {}

  @Post()
  @HttpCode(201)
  async createLog(@Body('message') message: string, @Body('ip') ip: string, @Req() request: Request): Promise<VisitorLog> {
    const clientIp = request.headers.forwarded || ip;

    return this.visitorLogService.createLog(clientIp, message); // Pass both IP and message to the service
  }

  @Get()
  async getAllLogs(): Promise<VisitorLog[]> {
    return this.visitorLogService.getAllLogs();
  }
}

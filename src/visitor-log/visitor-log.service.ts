import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitorLog } from './entities/visitor-log.entity';

@Injectable()
export class VisitorLogService {
  constructor(
    @InjectRepository(VisitorLog)
    private readonly visitorLogRepository: Repository<VisitorLog>,
  ) {}

  async createLog(ip: string, message: string): Promise<VisitorLog> {
    const logEntry = this.visitorLogRepository.create({ ip, message }); // Include message in the creation
    return this.visitorLogRepository.save(logEntry);
  }

  async getAllLogs(): Promise<VisitorLog[]> {
    return this.visitorLogRepository.find({
      order: {
        visitedAt: 'DESC',
      },
    });
  }
}

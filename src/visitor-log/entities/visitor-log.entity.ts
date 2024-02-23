import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VisitorLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  visitedAt: Date;
}
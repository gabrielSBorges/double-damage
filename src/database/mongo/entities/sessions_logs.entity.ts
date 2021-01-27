import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn } from 'typeorm';

@Entity('sessions_logs')
export class SessionLog {
  @ObjectIdColumn()
  id: ObjectID;

  @ObjectIdColumn()
  adventure_id: ObjectID;

  @Column()
  log: string;

  @CreateDateColumn()
  created_at: Date;
}

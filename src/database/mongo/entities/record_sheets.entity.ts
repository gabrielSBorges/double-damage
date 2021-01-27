import { Entity, Column, ObjectID, ObjectIdColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('record_sheets')
export class RecordSheet {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 100 })
  name: string;

  @Column()
  sections: Object[];

  @Column()
  public: boolean;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

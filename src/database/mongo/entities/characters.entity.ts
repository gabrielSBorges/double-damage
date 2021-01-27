import {
  Entity,
  Column,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('characters')
export class Character {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  sections: Object[];

  @Column()
  user_id: number;

  @Column()
  campaign_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

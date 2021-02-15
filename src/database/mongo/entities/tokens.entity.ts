import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('tokens')
export class Token {
  @Column()
  token: string;

  @ObjectIdColumn()
  user_id: number;
}

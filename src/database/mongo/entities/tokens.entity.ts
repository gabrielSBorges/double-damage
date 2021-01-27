import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('tokens')
export class Token {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  token: string;

  @ObjectIdColumn()
  user_id: ObjectID;
}

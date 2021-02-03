import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType('Player')
@InputType('PlayerInput')
@Entity('players')
export class Player {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  campaign_id: number;

  @Field()
  @Column()
  user_id: number;

  @Field({ nullable: true })
  @Column()
  character_id: string;

  @Field()
  @Column()
  active: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @CreateDateColumn()
  updated_at: Date;
}

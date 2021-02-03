import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './users.entity';

@ObjectType('Campaign')
@InputType('CampaignInput')
@Entity('campaigns')
export class Campaign {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  name: string;

  @Field()
  @Column()
  user_id: number;

  @Field({ nullable: true })
  @Column()
  record_sheet_id: string;

  @Field()
  @Column()
  active: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.campaigns)
  public user: User;
}

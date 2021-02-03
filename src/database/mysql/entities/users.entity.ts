import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Campaign } from './campaigns.entity';

@ObjectType('User')
@InputType('UserInput')
@Entity('users')
export class User {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ length: 100 })
  name: string;

  @Field({ nullable: true })
  @Column({ length: 100 })
  email: string;

  @Field({ nullable: true })
  @Column({ length: 255 })
  password: string;

  @Field({ nullable: true })
  @Column()
  active: boolean;

  @Field({ nullable: true })
  @CreateDateColumn()
  created_at: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Campaign, (campaign) => campaign.user)
  public campaigns: Campaign[];
}
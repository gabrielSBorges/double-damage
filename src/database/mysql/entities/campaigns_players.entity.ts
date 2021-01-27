import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('campaigns_players')
export class CampaignPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campaign_id: number;

  @Column()
  user_id: number;

  @Column()
  character_id: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

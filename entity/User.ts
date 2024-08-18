import { BaseModel, Column, Entity, PrimaryGeneratedColumn } from 'drizzle-orm';

@Entity('users')
export class User extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'string',
    unique: true,
    nullable: false,
    trim: true,
    lowercase: true,
  })
  emailAddress!: string;

  @Column({ type: 'string', nullable: true, trim: true })
  phoneNumber?: string;

  @Column({ type: 'string', nullable: false, trim: true })
  firstName!: string;

  @Column({ type: 'string', nullable: true, trim: true })
  middleName?: string;

  @Column({ type: 'string', nullable: false, trim: true })
  lastName!: string;

  @Column({ type: 'json', nullable: true })
  profile?: Record<string, any>;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;
}

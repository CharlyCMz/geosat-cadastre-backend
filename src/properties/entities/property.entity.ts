import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Land } from './land.entity';
import { Owner } from 'src/owners/entities/owner.entity';

@ObjectType()
@Entity({ name: 'properties' })
@Unique(['predialNumber'])
export class Property {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Int)
  @Column({ name: 'predial_number', type: 'bigint' })
  predialNumber: number;

  @Field()
  @Column({ type: 'money' })
  appraise: number;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 64 })
  state: string;

  @Field()
  @Column({ type: 'varchar', length: 64 })
  municipality: string;

  @OneToOne(() => Land, { nullable: false })
  @JoinColumn()
  land: Land;

  @ManyToMany(() => Owner, (owner) => owner.properties)
  @JoinTable()
  owners: Owner[];

  @Field()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

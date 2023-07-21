import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'properties' })
@Unique(['predialNumber'])
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  @Column({ name: 'predial_number', type: 'bigint' })
  predialNumber: number;

  @Field()
  @IsString()
  @Column({ type: 'money' })
  appraise: number;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 64 })
  state: string;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 64 })
  municipality: string;

  //TODO: Relations to Owners, Land and Constructions.

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

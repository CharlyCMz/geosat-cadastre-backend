import { ObjectType, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'lands' })
export class Land {
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Float)
  @Column({ type: 'bigint' })
  area: number;

  @Field((type) => Float)
  @Column({ name: 'comercial_value', type: 'money' })
  comercialValue: number;

  @Field()
  @Column({ type: 'boolean' })
  waterBodies: boolean;

  @Field()
  @IsString()
  @Column({ name: 'land_type', type: 'varchar', length: 24 })
  landType: string;

  //TODO: Relations to Properties and Constructions.

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

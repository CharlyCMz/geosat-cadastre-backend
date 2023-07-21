import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'constructions' })
export class Construction {
  @Field((type) => Float)
  @IsNumber()
  @IsPositive()
  @Column({ type: 'bigint' })
  area: number;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  @Column({ type: 'int' })
  floors: number;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 24 })
  type: string;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 128 })
  address: string;

  //TODO: Relations to Land.

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

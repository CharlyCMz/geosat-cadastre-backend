import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Land } from './land.entity';

@ObjectType()
@Entity({ name: 'constructions' })
export class Construction {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Float)
  @Column({ type: 'bigint' })
  area: number;

  @Field((type) => Int)
  @Column({ type: 'int' })
  floors: number;

  @Field()
  @Column({ type: 'varchar', length: 24 })
  type: string;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  address: string;

  @ManyToOne(() => Land, (land) => land.constructions)
  land: Land;

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

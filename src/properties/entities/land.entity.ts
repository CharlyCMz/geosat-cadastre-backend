import { ObjectType, Field, Float } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Construction } from './construction.entity';

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
  @Column({ name: 'land_type', type: 'varchar', length: 24 })
  landType: string;

  @OneToMany(() => Construction, (construction) => construction.land)
  constructions: Construction[];

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

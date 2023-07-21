import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export abstract class Owner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Field()
  @IsEmail()
  @Column({ name: 'e_mail', type: 'varchar', length: 64 })
  eMail: string;

  //TODO: Relations to Properties, Natural Person and Legal Person|.

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

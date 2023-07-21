import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'natural_people' })
export class NaturalPerson extends Owner {
  @Field()
  @IsString()
  @Column({ name: 'document_type', type: 'varchar', length: 5 })
  documentType: string;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  @Column({ name: 'document_number', type: 'bigint' })
  documentNumber: number;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 32 })
  name: string;

  @Field()
  @IsString()
  @Column({ name: 'last_name', type: 'varchar', length: 32 })
  lastName: string;
}

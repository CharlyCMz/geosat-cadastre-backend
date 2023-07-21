import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Column, Entity, Unique } from 'typeorm';

@ObjectType()
@Entity({ name: ' legal_people' })
@Unique(['nit'])
export class LegalPerson extends Owner {
  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  @Column({ name: 'nit', type: 'bigint' })
  nit: number;

  @Field()
  @IsString()
  @Column({ type: 'varchar', length: 128 })
  businessName: string;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';
import { Column, Entity, Unique } from 'typeorm';

@ObjectType()
@Entity({ name: 'legal_people' })
@Unique(['nit'])
export class LegalPerson extends Owner {
  @Field((type) => Int)
  @Column({ name: 'nit', type: 'bigint' })
  nit: number;

  @Field()
  @Column({ type: 'varchar', length: 128 })
  businessName: string;
}

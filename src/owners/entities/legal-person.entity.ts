import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';

@ObjectType()
export class LegalPerson extends Owner {
  @Field((type) => Int)
  nit: number;

  @Field()
  businessName: string;
}

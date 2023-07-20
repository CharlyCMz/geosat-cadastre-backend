import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';

@ObjectType()
export class NaturalPerson extends Owner {
  @Field()
  documentType: string;

  @Field((type) => Int)
  documentNumber: number;

  @Field()
  name: string;

  @Field()
  lastName: string;
}

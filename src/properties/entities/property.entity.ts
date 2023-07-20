import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Property {
  @Field((type) => Int)
  predialNumber: number;

  @Field((type) => Float)
  appraise: number;

  @Field()
  name: string;

  @Field()
  state: string;

  @Field()
  municipality: string;

  //TODO: Relations to Owners, Land and Constructions.
}

import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Land {
  @Field((type) => Float)
  area: number;

  @Field((type) => Float)
  comercialValue: number;

  @Field()
  waterBodies: boolean;

  @Field()
  landType: string;

  //TODO: Relations to Properties and Constructions.
}

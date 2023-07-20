import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Construction {
  @Field((type) => Float)
  area: number;

  @Field((type) => Int)
  floors: number;

  @Field()
  type: string;

  @Field()
  address: string;

  //TODO: Relations to Land.
}

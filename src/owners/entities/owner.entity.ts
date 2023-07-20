import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field()
  address: string;

  @Field((type) => Int)
  comercialValue: number;

  @Field()
  eMail: string;

  //TODO: Relations to Properties, Natural Person and Legal Person|.
}

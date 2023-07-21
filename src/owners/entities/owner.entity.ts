import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class Owner {
  @Field()
  @IsString()
  address: string;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  comercialValue: number;

  @Field()
  @IsEmail()
  eMail: string;

  //TODO: Relations to Properties, Natural Person and Legal Person|.
}

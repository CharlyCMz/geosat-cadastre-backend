import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class Construction {
  @Field((type) => Float)
  @IsNumber()
  @IsPositive()
  area: number;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  floors: number;

  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  address: string;

  //TODO: Relations to Land.
}

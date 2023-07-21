import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class Property {
  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  predialNumber: number;

  @Field((type) => Float)
  @IsNumber()
  @IsPositive()
  appraise: number;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  state: string;

  @Field()
  @IsString()
  municipality: string;

  //TODO: Relations to Owners, Land and Constructions.
}

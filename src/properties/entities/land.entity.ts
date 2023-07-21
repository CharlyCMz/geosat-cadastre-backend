import { ObjectType, Field, Float } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class Land {
  @Field((type) => Float)
  @IsNumber()
  @IsPositive()
  area: number;

  @Field((type) => Float)
  @IsNumber()
  @IsPositive()
  comercialValue: number;

  @Field()
  @IsBoolean()
  waterBodies: boolean;

  @Field()
  @IsString()
  landType: string;

  //TODO: Relations to Properties and Constructions.
}

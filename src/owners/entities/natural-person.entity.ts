import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';
import { IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class NaturalPerson extends Owner {
  @Field()
  @IsString()
  documentType: string;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  documentNumber: number;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  lastName: string;
}

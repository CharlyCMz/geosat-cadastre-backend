import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from './owner.entity';
import { IsNumber, IsPositive, IsString } from 'class-validator';

@ObjectType()
export class LegalPerson extends Owner {
  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  nit: number;

  @Field()
  @IsString()
  businessName: string;
}

import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

@InputType()
export class CreateNaturalPersonDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly address: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  @Field()
  readonly eMail: string;

  @Field()
  @IsString()
  documentType: string;

  @Field((type) => Int)
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  documentNumber: number;

  @Field()
  @IsString()
  @ApiProperty()
  name: string;

  @Field()
  @IsString()
  @ApiProperty()
  lastName: string;
}
@InputType()
export class UpdateNaturalPersonDTO extends PartialType(
  CreateNaturalPersonDTO,
) {}

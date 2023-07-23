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
export class CreateLegalPersonDTO {
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

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  @Field((type) => Int)
  readonly nit: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly businessName: string;
}

@InputType()
export class UpdateLegalPersonDTO extends PartialType(CreateLegalPersonDTO) {}

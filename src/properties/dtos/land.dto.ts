/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

@InputType()
export class CreateLandDTO {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  @Field((type) => Float)
  readonly area: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  @Field((type) => Int)
  readonly comercialValue: number;

  @IsBoolean()
  @ApiProperty()
  @Field()
  readonly waterBodies: boolean;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly landType: string;
}

export class UpdateLandDTO extends PartialType(CreateLandDTO) {}

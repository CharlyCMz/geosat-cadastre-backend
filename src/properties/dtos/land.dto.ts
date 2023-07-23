/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Float, ID, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
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

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  @Field(() => [ID])
  readonly constructionIds?: number[];
}

@InputType()
export class UpdateLandDTO extends PartialType(CreateLandDTO) {}

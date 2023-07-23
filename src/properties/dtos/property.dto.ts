import { Field, ID, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

@InputType()
export class CreatePropertyDTO {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  @Field((type) => Int)
  readonly predialNumber: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  @Field((type) => Int)
  readonly appraise: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly state: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly municipality: string;

  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly landId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  @Field(() => [ID])
  readonly ownerIds: number[];
}

@InputType()
export class UpdatePropertyDTO extends PartialType(CreatePropertyDTO) {}

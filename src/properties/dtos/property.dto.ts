import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty, PartialType } from '@nestjs/swagger';
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
  @IsPositive()
  @ApiProperty()
  @Field()
  readonly landId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly ownerIds: number[];
}

export class UpdatePropertyDTO extends PartialType(CreatePropertyDTO) {}

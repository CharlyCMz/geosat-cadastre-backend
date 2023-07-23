import { Field, Float, InputType, Int, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

@InputType()
export class CreateConstructionDTO {
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
  readonly floors: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Field()
  readonly address: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  @Field()
  readonly landId: number;
}

@InputType()
export class UpdateConstructionDTO extends PartialType(CreateConstructionDTO) {}

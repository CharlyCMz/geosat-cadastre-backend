import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { ApiProperty, PartialType } from '@nestjs/swagger';
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
}

export class UpdateConstructionDTO extends PartialType(CreateConstructionDTO) {}

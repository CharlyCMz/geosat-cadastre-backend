import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LandService } from '../services/land.service';
import { Land } from '../entities/land.entity';
import { CreateLandDTO, UpdateLandDTO } from '../dtos/land.dto';

function convertMoneyToNumeric(moneyValue: any): number {
  // Handle the conversion based on the data type used in your database
  // For example, if it's a numeric type, you might not need to do any additional parsing
  // In this case, we'll just return the input value if it's already a number.
  if (typeof moneyValue === 'number') {
    return moneyValue;
  }

  // If it's stored as a string with a currency symbol and commas (e.g., "$100,000.00"),
  // remove the currency symbol and commas before parsing.
  const numericValueString = moneyValue.replace('$', '').replace(',', '');

  // Parse the numeric value as a float or decimal
  const numericValue = parseFloat(numericValueString);

  return numericValue;
}

@Resolver(() => Land)
export class LandResolver {
  constructor(private landService: LandService) {}

  @Query(() => [Land])
  async findAllLands() {
    const lands = await this.landService.findAll();

    // Convert the "Money" type to a numeric type
    const landsNumericComercialValue = lands.map((land) => ({
      ...land,
      appraise: convertMoneyToNumeric(land.comercialValue),
    }));

    return landsNumericComercialValue;
  }

  @Query(() => Land)
  async findLandById(@Args('id', { type: () => Int }) id: number) {
    const land = await this.landService.findOneById(id);
    const landWithNumericAppraise = {
      ...land,
      appraise: convertMoneyToNumeric(land.comercialValue),
    };

    return landWithNumericAppraise;
  }

  @Mutation(() => Land)
  createLand(@Args('landInput') payload: CreateLandDTO) {
    return this.landService.createEntity(payload);
  }

  @Mutation(() => Land)
  updateLand(
    @Args('id') id: number,
    @Args('landInput') payload: UpdateLandDTO,
  ) {
    return this.landService.updateEntity(id, payload);
  }

  @Mutation(() => Land)
  deleteLand(@Args('id') id: number) {
    return this.landService.deleteEntity(id);
  }
}

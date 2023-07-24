import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertyService } from '../services/property.service';
import { Property } from '../entities/property.entity';
import { CreatePropertyDTO, UpdatePropertyDTO } from '../dtos/property.dto';

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

@Resolver(() => Property)
export class PropertyResolver {
  constructor(private propertyService: PropertyService) {}

  @Query(() => [Property])
  async findAllProperties() {
    const properties = await this.propertyService.findAll();

    // Convert the "Money" type to a numeric type
    const propertiesWithNumericAppraise = properties.map((property) => ({
      ...property,
      appraise: convertMoneyToNumeric(property.appraise),
    }));

    return propertiesWithNumericAppraise;
  }

  @Query(() => Property)
  async findPropertyById(@Args('id', { type: () => Int }) id: number) {
    const property = await this.propertyService.findOneById(id);
    const propertyWithNumericAppraise = {
      ...property,
      appraise: convertMoneyToNumeric(property.appraise),
    };

    return propertyWithNumericAppraise;
  }

  @Mutation(() => Property)
  createProperty(@Args('propertyInput') payload: CreatePropertyDTO) {
    return this.propertyService.createEntity(payload);
  }

  @Mutation(() => Property)
  updateProperty(
    @Args('id') id: number,
    @Args('propertyInput') payload: UpdatePropertyDTO,
  ) {
    return this.propertyService.updateEntity(id, payload);
  }

  @Mutation(() => Property)
  deleteProperty(@Args('id') id: number) {
    return this.propertyService.deleteEntity(id);
  }
}

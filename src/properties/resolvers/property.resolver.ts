import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertyService } from '../services/property.service';
import { Property } from '../entities/property.entity';
import { CreatePropertyDTO, UpdatePropertyDTO } from '../dtos/property.dto';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(private propertyService: PropertyService) {}

  @Query(() => [Property])
  findAllProperties() {
    return this.propertyService.findAll();
  }

  @Query(() => Property)
  findPropertyById(@Args('id', { type: () => Int }) id: number) {
    return this.propertyService.findOneById(id);
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

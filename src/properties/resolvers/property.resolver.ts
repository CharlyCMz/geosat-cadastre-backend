import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertyService } from '../services/property.service';
import { Property } from '../entities/property.entity';
import { CreatePropertyDTO, UpdatePropertyDTO } from '../dtos/property.dto';

@Resolver()
export class PropertyResolver {
  constructor(private propertyService: PropertyService) {}

  @Query(() => [Property])
  findAll() {
    return this.propertyService.findAll();
  }

  @Query(() => Property)
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.propertyService.findOneById(id);
  }

  @Mutation(() => Property)
  createEntity(@Args('propertyInput') payload: CreatePropertyDTO) {
    return this.propertyService.createEntity(payload);
  }

  @Mutation(() => Property)
  updateEntity(
    @Args('id') id: number,
    @Args('propertyInput') payload: UpdatePropertyDTO,
  ) {
    return this.propertyService.updateEntity(id, payload);
  }

  @Mutation(() => Property)
  deleteEntity(@Args('id') id: number) {
    return this.propertyService.deleteEntity(id);
  }
}

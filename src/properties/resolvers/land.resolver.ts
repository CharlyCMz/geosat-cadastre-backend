import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LandService } from '../services/land.service';
import { Land } from '../entities/land.entity';
import { CreateLandDTO, UpdateLandDTO } from '../dtos/land.dto';

@Resolver(() => Land)
export class LandResolver {
  constructor(private landService: LandService) {}

  @Query(() => [Land])
  findAllLands() {
    return this.landService.findAll();
  }

  @Query(() => Land)
  findLandById(@Args('id', { type: () => Int }) id: number) {
    return this.landService.findOneById(id);
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

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructionService } from '../services/construction.service';
import { Construction } from '../entities/construction.entity';
import {
  CreateConstructionDTO,
  UpdateConstructionDTO,
} from '../dtos/construction.dto';

@Resolver(() => Construction)
export class ConstructionResolver {
  constructor(private constructionService: ConstructionService) {}

  @Query(() => [Construction])
  findAllConstructions() {
    return this.constructionService.findAll();
  }

  @Query(() => Construction)
  findConstructionById(@Args('id', { type: () => Int }) id: number) {
    return this.constructionService.findOneById(id);
  }

  @Mutation(() => Construction)
  createConstruction(
    @Args('constructionInput') payload: CreateConstructionDTO,
  ) {
    return this.constructionService.createEntity(payload);
  }

  @Mutation(() => Construction)
  updateConstruction(
    @Args('id') id: number,
    @Args('constructionInput') payload: UpdateConstructionDTO,
  ) {
    return this.constructionService.updateEntity(id, payload);
  }

  @Mutation(() => Construction)
  deleteConstruction(@Args('id') id: number) {
    return this.constructionService.deleteEntity(id);
  }
}

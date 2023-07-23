import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructionService } from '../services/construction.service';
import { Construction } from '../entities/construction.entity';
import {
  CreateConstructionDTO,
  UpdateConstructionDTO,
} from '../dtos/construction.dto';

@Resolver('construction')
export class ConstructionResolver {
  constructor(private constructionService: ConstructionService) {}

  @Query(() => [Construction])
  findAll() {
    return this.constructionService.findAll();
  }

  @Query(() => Construction)
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.constructionService.findOneById(id);
  }

  @Mutation(() => Construction)
  createEntity(@Args('constructionInput') payload: CreateConstructionDTO) {
    return this.constructionService.createEntity(payload);
  }

  @Mutation(() => Construction)
  updateEntity(
    @Args('id') id: number,
    @Args('constructionInput') payload: UpdateConstructionDTO,
  ) {
    return this.constructionService.updateEntity(id, payload);
  }

  @Mutation(() => Construction)
  deleteEntity(@Args('id') id: number) {
    return this.constructionService.deleteEntity(id);
  }
}

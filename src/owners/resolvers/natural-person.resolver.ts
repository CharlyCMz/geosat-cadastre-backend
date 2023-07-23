import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NaturalPersonService } from '../services/natural-person.service';
import { NaturalPerson } from '../entities/natural-person.entity';
import {
  CreateNaturalPersonDTO,
  UpdateNaturalPersonDTO,
} from '../dtos/natural-person.dto';

@Resolver()
export class NaturalPersonResolver {
  constructor(private naturalPersonService: NaturalPersonService) {}

  @Query(() => [NaturalPerson])
  findAll() {
    return this.naturalPersonService.findAll();
  }

  @Query(() => NaturalPerson)
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.naturalPersonService.findOneById(id);
  }

  @Mutation(() => NaturalPerson)
  createEntity(@Args('ownerInput') payload: CreateNaturalPersonDTO) {
    return this.naturalPersonService.createEntity(payload);
  }

  @Mutation(() => NaturalPerson)
  updateEntity(
    @Args('id') id: number,
    @Args('ownerInput') payload: UpdateNaturalPersonDTO,
  ) {
    return this.naturalPersonService.updateEntity(id, payload);
  }

  @Mutation(() => NaturalPerson)
  deleteEntity(@Args('id') id: number) {
    return this.naturalPersonService.deleteEntity(id);
  }
}

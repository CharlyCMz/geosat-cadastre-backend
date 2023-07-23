import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NaturalPersonService } from '../services/natural-person.service';
import { NaturalPerson } from '../entities/natural-person.entity';
import {
  CreateNaturalPersonDTO,
  UpdateNaturalPersonDTO,
} from '../dtos/natural-person.dto';

@Resolver(() => NaturalPerson)
export class NaturalPersonResolver {
  constructor(private naturalPersonService: NaturalPersonService) {}

  @Query(() => [NaturalPerson])
  findAllNaturalPerson() {
    return this.naturalPersonService.findAll();
  }

  @Query(() => NaturalPerson)
  findNaturalPersonById(@Args('id', { type: () => Int }) id: number) {
    return this.naturalPersonService.findOneById(id);
  }

  @Mutation(() => NaturalPerson)
  createNaturalPerson(@Args('ownerInput') payload: CreateNaturalPersonDTO) {
    return this.naturalPersonService.createEntity(payload);
  }

  @Mutation(() => NaturalPerson)
  updateNaturalPerson(
    @Args('id') id: number,
    @Args('ownerInput') payload: UpdateNaturalPersonDTO,
  ) {
    return this.naturalPersonService.updateEntity(id, payload);
  }

  @Mutation(() => NaturalPerson)
  deleteNaturalPerson(@Args('id') id: number) {
    return this.naturalPersonService.deleteEntity(id);
  }
}

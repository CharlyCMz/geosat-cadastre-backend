import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LegalPersonService } from '../services/legal-person.service';
import { LegalPerson } from '../entities/legal-person.entity';
import {
  CreateLegalPersonDTO,
  UpdateLegalPersonDTO,
} from '../dtos/legal-person.dto';

@Resolver()
export class LegalPersonResolver {
  constructor(private legalPersonService: LegalPersonService) {}

  @Query(() => [LegalPerson])
  findAll() {
    return this.legalPersonService.findAll();
  }

  @Query(() => LegalPerson)
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.legalPersonService.findOneById(id);
  }

  @Mutation(() => LegalPerson)
  createEntity(@Args('ownerInput') payload: CreateLegalPersonDTO) {
    return this.legalPersonService.createEntity(payload);
  }

  @Mutation(() => LegalPerson)
  updateEntity(
    @Args('id') id: number,
    @Args('ownerInput') payload: UpdateLegalPersonDTO,
  ) {
    return this.legalPersonService.updateEntity(id, payload);
  }

  @Mutation(() => LegalPerson)
  deleteEntity(@Args('id') id: number) {
    return this.legalPersonService.deleteEntity(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LegalPersonService } from '../services/legal-person.service';
import { LegalPerson } from '../entities/legal-person.entity';
import {
  CreateLegalPersonDTO,
  UpdateLegalPersonDTO,
} from '../dtos/legal-person.dto';

@Resolver(() => LegalPerson)
export class LegalPersonResolver {
  constructor(private legalPersonService: LegalPersonService) {}

  @Query(() => [LegalPerson])
  findAllLegalPerson() {
    return this.legalPersonService.findAll();
  }

  @Query(() => LegalPerson)
  findLegalPersonById(@Args('id', { type: () => Int }) id: number) {
    return this.legalPersonService.findOneById(id);
  }

  @Mutation(() => LegalPerson)
  createLegalPerson(@Args('ownerInput') payload: CreateLegalPersonDTO) {
    return this.legalPersonService.createEntity(payload);
  }

  @Mutation(() => LegalPerson)
  updateLegalPerson(
    @Args('id') id: number,
    @Args('ownerInput') payload: UpdateLegalPersonDTO,
  ) {
    return this.legalPersonService.updateEntity(id, payload);
  }

  @Mutation(() => LegalPerson)
  deleteLegalPerson(@Args('id') id: number) {
    return this.legalPersonService.deleteEntity(id);
  }
}

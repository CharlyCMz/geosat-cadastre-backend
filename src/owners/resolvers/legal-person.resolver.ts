import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LegalPersonService } from '../services/legal-person.service';
import { LegalPerson } from '../entities/legal-person.entity';
import { CreateLegalPersonDTO } from '../dtos/legal-person.dto';

@Resolver()
export class LegalPersonResolver {
  constructor(private legalPersonService: LegalPersonService) {}

  @Query(() => [LegalPerson])
  AllLegalPerson() {
    return this.legalPersonService.findAll();
  }

  @Query(() => LegalPerson)
  legalPersonById(@Args('id', { type: () => Int }) id: number) {
    return this.legalPersonService.findOneById(id);
  }

  @Mutation(() => LegalPerson)
  createEntity(@Args('ownerInput') createOwner: CreateLegalPersonDTO) {
    return this.legalPersonService.createEntity(createOwner);
  }
}

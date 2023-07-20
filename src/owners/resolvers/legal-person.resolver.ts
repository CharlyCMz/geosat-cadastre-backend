import { Query, Resolver } from '@nestjs/graphql';
import { LegalPersonService } from '../services/legal-person.service';
import { LegalPerson } from '../entities/legal-person.entity';

@Resolver()
export class LegalPersonResolver {
  constructor(private legalPersonService: LegalPersonService) {}

  @Query(() => [LegalPerson])
  legalPersons() {
    return this.legalPersonService.findOne();
  }
}

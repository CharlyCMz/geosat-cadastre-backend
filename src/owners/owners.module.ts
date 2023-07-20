import { Module } from '@nestjs/common';
import { NaturalPersonService } from './services/natural-person.service';
import { LegalPersonService } from './services/legal-person.service';
import { NaturalPersonResolver } from './resolvers/natural-person.resolver';
import { LegalPersonResolver } from './resolvers/legal-person.resolver';

@Module({
  providers: [NaturalPersonService, LegalPersonService, NaturalPersonResolver, LegalPersonResolver]
})
export class OwnersModule {}

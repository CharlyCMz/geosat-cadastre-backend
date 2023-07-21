import { Module } from '@nestjs/common';
import { NaturalPersonService } from './services/natural-person.service';
import { LegalPersonService } from './services/legal-person.service';
import { NaturalPersonResolver } from './resolvers/natural-person.resolver';
import { LegalPersonResolver } from './resolvers/legal-person.resolver';
import { LegalPerson } from './entities/legal-person.entity';
import { NaturalPerson } from './entities/natural-person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LegalPerson, NaturalPerson])],
  providers: [
    NaturalPersonService,
    LegalPersonService,
    NaturalPersonResolver,
    LegalPersonResolver,
  ],
  exports: [LegalPersonService, NaturalPersonService],
})
export class OwnersModule {}

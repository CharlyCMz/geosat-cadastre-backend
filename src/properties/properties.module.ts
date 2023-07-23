import { Module } from '@nestjs/common';
import { PropertyService } from './services/property.service';
import { LandService } from './services/land.service';
import { ConstructionService } from './services/construction.service';
import { PropertyResolver } from './resolvers/property.resolver';
import { LandResolver } from './resolvers/land.resolver';
import { ConstructionResolver } from './resolvers/construction.resolver';
import { OwnersModule } from 'src/owners/owners.module';
import { Construction } from './entities/construction.entity';
import { Land } from './entities/land.entity';
import { Property } from './entities/property.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalPerson } from 'src/owners/entities/legal-person.entity';
import { NaturalPerson } from 'src/owners/entities/natural-person.entity';

@Module({
  imports: [
    OwnersModule,
    TypeOrmModule.forFeature([Construction, Land, Property]),
  ],
  providers: [
    PropertyService,
    LandService,
    ConstructionService,
    PropertyResolver,
    LandResolver,
    ConstructionResolver,
    LegalPerson,
    NaturalPerson,
  ],
})
export class PropertiesModule {}

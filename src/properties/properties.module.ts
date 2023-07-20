import { Module } from '@nestjs/common';
import { PropertyService } from './services/property.service';
import { LandService } from './services/land.service';
import { ConstructionService } from './services/construction.service';
import { PropertyResolver } from './resolvers/property.resolver';
import { LandResolver } from './resolvers/land.resolver';
import { ConstructionResolver } from './resolvers/construction.resolver';

@Module({
  providers: [PropertyService, LandService, ConstructionService, PropertyResolver, LandResolver, ConstructionResolver]
})
export class PropertiesModule {}
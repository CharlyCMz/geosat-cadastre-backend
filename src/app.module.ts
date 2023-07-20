import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { PropertiesModule } from './properties/properties.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [OwnersModule, PropertiesModule],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    OwnersModule,
    PropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

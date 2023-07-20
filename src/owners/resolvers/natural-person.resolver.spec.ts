import { Test, TestingModule } from '@nestjs/testing';
import { NaturalPersonResolver } from './natural-person.resolver';

describe('NaturalPersonResolver', () => {
  let resolver: NaturalPersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaturalPersonResolver],
    }).compile();

    resolver = module.get<NaturalPersonResolver>(NaturalPersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

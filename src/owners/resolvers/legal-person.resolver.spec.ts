import { Test, TestingModule } from '@nestjs/testing';
import { LegalPersonResolver } from './legal-person.resolver';

describe('LegalPersonResolver', () => {
  let resolver: LegalPersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegalPersonResolver],
    }).compile();

    resolver = module.get<LegalPersonResolver>(LegalPersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

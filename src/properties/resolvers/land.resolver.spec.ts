import { Test, TestingModule } from '@nestjs/testing';
import { LandResolver } from './land.resolver';

describe('LandResolver', () => {
  let resolver: LandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandResolver],
    }).compile();

    resolver = module.get<LandResolver>(LandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

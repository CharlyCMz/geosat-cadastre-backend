import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionResolver } from './construction.resolver';

describe('ConstructionResolver', () => {
  let resolver: ConstructionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstructionResolver],
    }).compile();

    resolver = module.get<ConstructionResolver>(ConstructionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

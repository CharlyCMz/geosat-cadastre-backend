import { Test, TestingModule } from '@nestjs/testing';
import { NaturalPersonService } from './natural-person.service';

describe('NaturalPersonService', () => {
  let service: NaturalPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaturalPersonService],
    }).compile();

    service = module.get<NaturalPersonService>(NaturalPersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

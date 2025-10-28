import { Test, TestingModule } from '@nestjs/testing';
import { IngredienceService } from './ingredience.service';

describe('IngredienceService', () => {
  let service: IngredienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredienceService],
    }).compile();

    service = module.get<IngredienceService>(IngredienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

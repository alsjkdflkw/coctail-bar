import { Test, TestingModule } from '@nestjs/testing';
import { IngredienceController } from './ingredience.controller';

describe('IngredienceController', () => {
  let controller: IngredienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredienceController],
    }).compile();

    controller = module.get<IngredienceController>(IngredienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

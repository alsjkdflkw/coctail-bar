import { Test, TestingModule } from '@nestjs/testing';
import { CoctailController } from './cocktail.controller';

describe('CoctailController', () => {
  let controller: CoctailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoctailController],
    }).compile();

    controller = module.get<CoctailController>(CoctailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

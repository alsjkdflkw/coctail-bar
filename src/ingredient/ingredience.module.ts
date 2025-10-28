import { Module } from '@nestjs/common';
import { IngredienceController } from './ingredience.controller';
import { IngredienceService } from './ingredience.service';

@Module({
  controllers: [IngredienceController],
  providers: [IngredienceService]
})
export class IngredienceModule {}

import { Module } from '@nestjs/common';
import { IngredienceController } from './ingredient.controller';
import { IngredienceService } from './ingredient.service';

@Module({
  controllers: [IngredienceController],
  providers: [IngredienceService]
})
export class IngredienceModule {}

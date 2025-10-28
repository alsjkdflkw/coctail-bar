import { Module } from '@nestjs/common';
import { CoctailController } from './cocktail.controller';
import { CoctailService } from './cocktail.service';

@Module({
  controllers: [CoctailController],
  providers: [CoctailService]
})
export class CoctailModule {}

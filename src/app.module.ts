import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoctailModule } from './coctail/coctail.module';
import { IngredienceModule } from './ingredience/ingredience.module';

@Module({
  imports: [CoctailModule, IngredienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

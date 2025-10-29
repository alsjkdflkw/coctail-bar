import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IngredienceService } from './ingredient.service';
import { Ingredient } from './ingredient.entity'

@Controller('ingredience')
export class IngredienceController {
    constructor(private readonly ingredienceService : IngredienceService) {}

    @Get()
    findAll() : Ingredient[] {
        return this.ingredienceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Ingredient {
        return this.ingredienceService.findOne(+id);
    }

    @Post()
    create(@Body() ingredience : Ingredient) : Ingredient {
        return this.ingredienceService.create(ingredience);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedIngredience : Partial<Ingredient>): Ingredient {
        return this.ingredienceService.update(+id, updatedIngredience);
    }

    @Delete(':id')
    delete(@Param('id') id : string) : void {
        this.ingredienceService.delete(+id);
    }


}

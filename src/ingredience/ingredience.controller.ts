import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IngredienceService } from './ingredience.service';
import { Ingredience } from './ingredience.entity'

@Controller('ingredience')
export class IngredienceController {
    constructor(private readonly ingredienceService : IngredienceService) {}

    @Get()
    findAll() : Ingredience[] {
        return this.ingredienceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Ingredience {
        return this.ingredienceService.findOne(+id);
    }

    @Post()
    create(@Body() ingredience : Ingredience) : Ingredience {
        return this.ingredienceService.create(ingredience);
    }

    @Delete(':id')
    delete(@Param('id') id : string) : void {
        this.ingredienceService.delete(+id);
    }


}

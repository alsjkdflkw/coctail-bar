import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoctailService } from './cocktail.service';
import { Cocktail } from './cocktail.entity'

@Controller('coctail')
export class CoctailController {

    constructor(private readonly coctailService : CoctailService) {}

    @Get()
    findAll() : Cocktail[] {
        return this.coctailService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Cocktail {
        return this.coctailService.findOne(+id);
    }

    @Post()
    create(@Body() coctail : Cocktail) : Cocktail {
        return this.coctailService.create(coctail);
    }

    @Put(':id')
        update(@Param('id') id: string, @Body() updatedCoctail : Partial<Cocktail>): Cocktail {
            return this.coctailService.update(+id, updatedCoctail);
    }

    @Delete(':id')
    delete(@Param('id') id : string) : void {
        this.coctailService.delete(+id);
    }

}

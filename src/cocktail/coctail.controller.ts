import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoctailService } from './coctail.service';
import { Coctail } from './coctail.entity'

@Controller('coctail')
export class CoctailController {

    constructor(private readonly coctailService : CoctailService) {}

    @Get()
    findAll() : Coctail[] {
        return this.coctailService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Coctail {
        return this.coctailService.findOne(+id);
    }

    @Post()
    create(@Body() coctail : Coctail) : Coctail {
        return this.coctailService.create(coctail);
    }

    @Put(':id')
        update(@Param('id') id: string, @Body() updatedCoctail : Partial<Coctail>): Coctail {
            return this.coctailService.update(+id, updatedCoctail);
    }

    @Delete(':id')
    delete(@Param('id') id : string) : void {
        this.coctailService.delete(+id);
    }

}

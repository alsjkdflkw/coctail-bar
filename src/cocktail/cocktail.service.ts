import { Injectable, NotFoundException } from '@nestjs/common';
import { Cocktail } from './cocktail.entity';

@Injectable()
export class CoctailService {
    private coctails : Cocktail[] = [];
    private idCouter : number = 1;

    findAll() : Cocktail[] {
        return this.coctails;
    }

    findOne(id: number): Cocktail {
    const coctail = this.coctails.find(c => c.id === id);

    if (!coctail) {
        throw new NotFoundException(`Cocktail with ID #${id} not found`);
    }

    return coctail;
}

    create(coctail : Cocktail) : Cocktail {
        coctail.id = this.idCouter++;
        this.coctails.push(coctail);
        return coctail;
    }

    update(id : number, updatedCoctail : Partial<Cocktail>) : Cocktail {
        const coctail = this.findOne(id)
        if (coctail) {
            Object.assign(coctail, updatedCoctail);
        }
        return coctail;
    }

    delete(id : number) : void {
        const coctail = this.coctails.find(c => c.id === id);
        
        if (!coctail) {
            throw new NotFoundException(`Cocktail with ID #${id} not found`);
        }

        this.coctails = this.coctails.filter(coctails => coctails.id !== id)
    }
}

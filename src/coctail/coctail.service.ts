import { Injectable, NotFoundException } from '@nestjs/common';
import { Coctail } from './coctail.entity';

@Injectable()
export class CoctailService {
    private coctails : Coctail[] = [];
    private idCouter : number = 1;

    findAll() : Coctail[] {
        return this.coctails;
    }

    findOne(id: number): Coctail {
    const coctail = this.coctails.find(c => c.id === id);

    if (!coctail) {
        throw new NotFoundException(`Coctail with ID #${id} not found`);
    }

    return coctail;
}

    create(coctail : Coctail) : Coctail {
        coctail.id = this.idCouter++;
        this.coctails.push(coctail);
        return coctail;
    }

    update(id : number, updatedCoctail : Partial<Coctail>) : Coctail {
        const coctail = this.findOne(id)
        if (coctail) {
            Object.assign(coctail, updatedCoctail);
        }
        return coctail;
    }

    delete(id : number) : void {
        const coctail = this.coctails.find(c => c.id === id);
        
        if (!coctail) {
            throw new NotFoundException(`Coctail with ID #${id} not found`);
        }

        this.coctails = this.coctails.filter(coctails => coctails.id !== id)
    }
}

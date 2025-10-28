import { Injectable, NotFoundException } from '@nestjs/common';
import { Ingredience } from './ingredience.entity';

@Injectable()
export class IngredienceService {

    private ingredience : Ingredience[] = [];
    private idCouter : number = 1;

    findAll() : Ingredience[] {
        return this.ingredience;
    }

    findOne(id: number): Ingredience {
    const ingredience = this.ingredience.find(c => c.id === id);

    if (!ingredience) {
        throw new NotFoundException(`Ingredience with ID #${id} not found`);
    }

        return ingredience;
    }

    create(ingredience : Ingredience) : Ingredience {
        ingredience.id = this.idCouter++;
        this.ingredience.push(ingredience);
        return ingredience;
    }

    update(id : number, updatedIngredience : Partial<Ingredience>) : Ingredience {
        const ingredience = this.findOne(id)
        if (ingredience) {
            Object.assign(ingredience, updatedIngredience);
        }
        return ingredience;
    }

    delete(id : number) : void {
        this.ingredience = this.ingredience.filter(ingredience => ingredience.id !== id)
    }
}
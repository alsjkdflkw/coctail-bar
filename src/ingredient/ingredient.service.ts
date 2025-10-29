import { Injectable, NotFoundException } from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { IsNumberString } from 'class-validator'

@Injectable()
export class IngredienceService {

    private ingredience : Ingredient[] = [];
    private idCouter : number = 1;

    findAll() : Ingredient[] {
        return this.ingredience;
    }

    findOne(id: number): Ingredient {
        const ingredience = this.ingredience.find(c => c.id === id);

        if (!ingredience) {
            throw new NotFoundException(`Ingredient with ID #${id} not found`);
        }

        return ingredience;
    }

    create(ingredience : Ingredient) : Ingredient {
        ingredience.id = this.idCouter++;
        this.ingredience.push(ingredience);
        return ingredience;
    }

    update(id : number, updatedIngredience : Partial<Ingredient>) : Ingredient {
        const ingredience = this.findOne(id)
        if (ingredience) {
            Object.assign(ingredience, updatedIngredience);
        }
        return ingredience;
    }

    delete(id : number) : void {
        const ingredience = this.ingredience.find(c => c.id === id)

        if(!ingredience) {
            throw new NotFoundException(`Ingredient with ID #${id} not found`);
        }

        this.ingredience = this.ingredience.filter(ingredience => ingredience.id !== id)
    }
}
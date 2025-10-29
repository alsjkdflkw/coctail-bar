import { Ingredient } from "src/ingredient/ingredient.entity";
import { IsNumber, IsNotEmpty } from 'class-validator';

export class Cocktail {
    id : number;
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    category : string;
    instructions : string;
    @IsNotEmpty()
    ingredients: Array<{ ingredientId: number; quantity: string;}>;
}
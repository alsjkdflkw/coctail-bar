import { Ingredient } from "src/ingredient/ingredient.entity";

export class Cocktail {
    id : number;
    name : string;
    category : string;
    instructions : string;
    ingredients : [Ingredient, string];
}
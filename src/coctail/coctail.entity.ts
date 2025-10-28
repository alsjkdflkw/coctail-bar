import { Ingredience } from "src/ingredience/ingredience.entity";

export class Coctail {
    id : number;
    name : string;
    category : string;
    instructions : string;
    ingredients : [Ingredience, string];
}
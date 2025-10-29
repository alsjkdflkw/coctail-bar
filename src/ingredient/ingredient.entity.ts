import { IsBoolean, IsNotEmpty } from 'class-validator';

export class Ingredient {
    id : number;
    @IsNotEmpty()
    name : string;
    description : string;
    @IsBoolean()
    hasAlcohol : boolean;
    photo : string;
}
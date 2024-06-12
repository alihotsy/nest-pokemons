import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {


    @MinLength(1, {message: "field name must have as min a length of 1 character"})
    @IsString({message: "field name must be a string"})
    name:string;

    @IsInt({message: "field no must be a number"})
    @IsPositive({message: "field no muest be a positive number"})
    @Min(1, {message: "field no must be a number equal or greater than 1"})
    no:number;
}

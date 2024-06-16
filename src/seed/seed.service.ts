import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {
  


  constructor(
    @InjectModel(Pokemon.name)
    private pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
 
    const pokemons: CreatePokemonDto[] = data.results.map(({url,name}) => {
      
      const segments = url.split('/');

      const no:number = +segments[ segments.length - 2 ];


      return {
        name,
        no
      }
      
    })

    const result: Pokemon[] = await this.pokemonModel.insertMany(pokemons);
    
    return "SEED executed!!!";
  }

  
}

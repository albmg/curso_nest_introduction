import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
    
    //public id: number;
    //public name: string;

    //constructor( id:number, name: string) {
    //    this.id = id;
    //    this.name = name;
    //}

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id },jpg`
    }

    constructor(
        public readonly id: number,
        public name: string,
        //public imageUrl: string        
    ) {}    


    scream() {
        console.log(`${ this.name.toUpperCase() } !!!`)
    }

    speak() {
        console.log(`${ this.name } , ${ this.name }`)
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log( data.moves[0].move.name )

        return data.moves

    }
}


export const charmander = new Pokemon( 4, 'Charmander')

 
 
//charmander.id = 10
charmander.name = 'No'

charmander.scream()
charmander.speak()
charmander.getMoves()

import './style.css'

import { nombre, age } from './bases/01-types.ts'
import { pokemonIds, bulbasaur, pokemons } from './bases/02-objects.ts'
//import { charmander } from './bases/03-clases.ts'
import { charmander } from './bases/04-injections.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <h1>Hola, ${ nombre } ${ age }</h1>
 <hr />
 <h2>${pokemonIds.join(',')}</h2>
 <h3>${bulbasaur.name} ${bulbasaur.id} ${bulbasaur.age}</h3>
 <h4>${pokemons}</h4>
 <hr />
 <h5>${charmander.name} - ${charmander.id} - ${charmander.imageUrl}</h5>  
`
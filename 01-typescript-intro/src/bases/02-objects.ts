export const pokemonIds = [1, 20, 30, 34, 66]

pokemonIds.push(+'kjahdk')

interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}


export const pokemons:Pokemon[] = []

pokemons.push(bulbasaur)
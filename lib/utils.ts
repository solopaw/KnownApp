import { clsx, type ClassValue } from "clsx"
import { NamedAPIResource, Pokemon, PokemonClient } from "pokenode-ts"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const pokemonclient =  new PokemonClient({
  
})
export async function listPokemonsAsync() {
  const response = await pokemonclient.listPokemons()
  let pokemons:Pokemon[] = []
  response.results.forEach(async (pokemon) => {
    let pmon = await pokemonclient.getPokemonByName(pokemon.name)
    pokemons.push(pmon)
  })
  return pokemons
}
export function listPokemons() {
  let pokemons:Pokemon[] = []
  listPokemonsAsync().then((response) => {
    pokemons = response
  }).catch((error) => {
    console.error("Error fetching Pokémon data:", error)
  }
  )
  return pokemons
}
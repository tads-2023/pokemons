import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonsStore = defineStore('pokemon', () => {
  const pokemons = ref([]);

  const fetchPokemons = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = await request.json();
    pokemons.value = await Promise.all(response.results.map(async (pokemon) => {
      const pokemonRequest = await fetch(pokemon.url);
      console.log(pokemon.name);
      return pokemonRequest.json();
    }))
  }
  
  return { 
    pokemons, 
    fetchPokemons
  }
})

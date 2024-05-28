<script setup>
import { onMounted, ref } from 'vue';
import Linha from "@/components/Linha.vue";
import {usePokemonsStore} from "@/stores/pokemons";

const store = usePokemonsStore();

onMounted(() => {
  store.fetchPokemons();
})

</script>

<template>
  <header>
    <RouterLink to="/new">Criar um pokemin</RouterLink>  
  </header>
  <main>
    <table>
      <thead>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Sprite</th>
      </thead>
      <tbody>
        <Linha 
          v-for="pokemon in store.pokemons"
          :banana="pokemon"
        />
      </tbody>
    </table>
  </main>
</template>

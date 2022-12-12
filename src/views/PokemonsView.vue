<template>
    <div class="pokemons">
      <h1>This is an about pokemon page</h1>
      <Pokemon/>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Pokemon from '@/components/Pokemon.vue';


export default defineComponent({
  components: {
    Pokemon
  }
  
})
</script>
  
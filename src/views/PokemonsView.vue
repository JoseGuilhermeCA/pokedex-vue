<template>
  <div class="pokemons">
    <Pokemon />
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
<style lang="scss">

</style>
  
<template>

    <div class="teste">
        <PokemonCard v-for="(pokemon) in pkm" :name="pokemon.name" :url="pokemon.url" v-bind:key="pokemon.name" />
    </div>


</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import api from '@/services/api';
import PokemonCard from './PokemonCard.vue';

export default defineComponent({
    name: "Pokemon-vue",

    components: {
        PokemonCard
    },

    beforeMount() {
        api.get("/pokemon?limit=181")
            .then(response => {
                console.log(response)
                response.data.results.map((e: any) => {
                    this.pkm.push(e)

                })
            });
    },

    data() {

        return { pkm: [] as any }
    },

    methods: {

    },
})


</script>

<style lang="scss">

</style>
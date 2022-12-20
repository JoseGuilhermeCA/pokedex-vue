<template>

    <div class="container">
        <PokemonCard v-for="(pokemon) in pkm" :name="pokemon.name" :url="pokemon.url" v-bind:key="pokemon.name" />
    </div>

    <div class="buttons">
        <div class="back-button" v-if="page !== 1">
            <button @click="updatePagination('previous')">
                <p class="button-label">
                    PREVIOUS PAGE
                </p>
            </button>
        </div>

        <div class="next-button" v-if="page !== 9">
            <button @click="updatePagination('next')">
                <p class="button-label">
                    NEXT PAGE
                </p>
            </button>
        </div>
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
        api.get(`/pokemon?limit=18&offset=${this.offset}`)
            .then(response => {
                console.log(response)
                response.data.results.map((e: any) => {
                    this.pkm.push(e)
                })
            });
    },
    data() {
        return { pkm: [] as any, offset: 0, page: 1, limit: 18 }
    },
    methods: {
        updatePagination(x: string) {
            if (x == 'previous' && this.page !== 1) {
                this.offset -= 18
                this.page--

            } else if (x == 'next' && this.page !== 9) {
                this.offset += 18
                this.page++
            }
            if (this.page == 9) {
                api.get(`/pokemon?limit=7&offset=${this.offset}`)
                    .then(response => {
                        console.log(response)
                        this.pkm = response.data.results

                    });

            }else{
                api.get(`/pokemon?limit=18&offset=${this.offset}`)
                    .then(response => {
                        console.log(response)
                        this.pkm = response.data.results

                    });
            }

        }
    },
})
</script>

<style lang="scss">
.container {

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 20px;
    padding: 20px;

}

.buttons {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    button {
        background-color: black;
        border-radius: 20px;
        color: white;
        padding: 20px;
    }

    .button-label {
        font-size: 20px;
    }


}
</style>
<template>

    <div class="divBusca">
        <input v-model='search' type="text" id="txtBusca" placeholder="Buscar..." @change="current_Data()" />
        <img src="../assets/search3.png.png" id="btnBusca" alt="Buscar" />
    </div>

    <div class="container">
        <PokemonCard v-if="search == ''" v-for="(pokemon) in pkm" :name="pokemon.name" :url="pokemon.url"
            v-bind:key="pokemon.name" />
        <PokemonCard v-if="search" v-for="(pokemon) in pkmFiltredList" :name="pokemon.name" :url="pokemon.url"
            v-bind:key="pokemon.name" />
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
import { pkmInterface } from '../interfaces/pkmInterface';

export default defineComponent({
    name: "Pokemon-vue",
    components: {
        PokemonCard
    },
    beforeMount() {
        api.get(`/pokemon?limit=18&offset=${this.offset}`)
            .then(response => {

                response.data.results.map((e: any) => {
                    this.pkm.push(e)
                })
            });

        api.get(`/pokemon?limit=151&offset=${this.offset}`)
            .then(response => {

                response.data.results.map((e: any) => {
                    this.pkmCompleteList.push(e)
                })
            });


    },


    data() {
        return { pkm: [] as pkmInterface, offset: 0, page: 1, search: "", pkmCompleteList: [] as pkmInterface, pkmFiltredList: [] as pkmInterface }
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

                        this.pkm = response.data.results

                    });

            } else {
                api.get(`/pokemon?limit=18&offset=${this.offset}`)
                    .then(response => {

                        this.pkm = response.data.results

                    });
            }

        },
        current_Data() {
            return (
                this.pkmCompleteList.filter((element: JSON) => {
                    if (element.name.toLowerCase().includes(this.search.toLowerCase())){
                        this.pkmFiltredList.push(element)

                       
                        //console.log(JSON.parse(JSON.stringify(element)))    
                        
                    }



                    //console.log(element.name .toLowerCase() .includes(this.search.toLowerCase()))
                        
                        
                }

                ) || []
            )
        }

    },
    computed: {

    }
})
</script>

<style lang="scss">
.divBusca {
    margin-left: 16px;
    border: solid 1px;
    border-radius: 15px;
    width: 300px;

    #txtBusca {
        float: left;
        background-color: transparent;
        padding-left: 5px;
        font-style: italic;
        font-size: 18px;
        border: none;
        height: 32px;
        width: 260px;
    }
}


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
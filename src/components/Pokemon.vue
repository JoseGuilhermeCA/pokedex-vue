<template>

    <div class="divBusca">
        <input v-model='search' type="text" id="txtBusca" placeholder="Buscar..." @change="searchFilter()" />
        <img src="../assets/search3.png.png" id="btnBusca" alt="Buscar" />
    </div>

    <div class="selectFilter">
        <select v-model='selected' name="filterType" @change="typeFilter">
            <option value="null" selected> TIPO </option>
            <option value="1"> COMUM </option>
            <option value="2"> LUTADOR </option>
            <option value="3"> VOADOR </option>
            <option value="4"> VENENO </option>
            <option value="5"> TERRESTE </option>
            <option value="6"> PEDRA </option>
            <option value="7"> INSETO </option>
            <option value="8"> FANTASMA </option>
            <option value="9"> AÇO </option>
            <option value="10"> FOGO </option>
            <option value="11"> AGUA </option>
            <option value="12"> PLANTA </option>
            <option value="13"> ELETRICO </option>
            <option value="14"> PSIQUICO </option>
            <option value="15"> GELO </option>
            <option value="16"> DRAGÃO </option>
            <option value="17"> NOTURNO </option>
            <option value="18"> FADA </option>
            <option value="10001"> DESCONHECIDO </option>
            <option value="10002"> SOMBRA </option>

        </select>
    </div>
    <div>
        <div class="detailsContainer__on" v-if="detailsCheck" v-on:click="detailsCheck = false">

            <div class="detailsContainerContent">
                <div class="buttonDiv">
                    <button class="detailsButton" v-on:click="detailsCheck = false">
                        <img src="../assets/xButton.png">
                    </button>
                </div>
                <DetailsPokemon class="detailsComponent" :url="this.detailsUrl" :name="this.detailsName"
                    v-on:click="cancelBubble" />
            </div>
        </div>
    </div>
    <div class="container">

        <PokemonCard v-if="search == '' && selected == 'null'" v-for="(pokemon) in pkm" :name="pokemon.name"
            :url="pokemon.url" v-bind:key="pokemon.name" v-on:click="detailsPush(pokemon)" />
        <PokemonCard v-if="search || selected" v-for="(pokemon) in pkmFiltredList" :name="pokemon.name"
            :url="pokemon.url" v-bind:key="pokemon.name" v-on:click="detailsPush(pokemon)" />
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
import DetailsPokemon from '../components/DetailsPokemon.vue'

export default defineComponent({
    name: "Pokemon-vue",
    components: {
        PokemonCard,
        DetailsPokemon
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
        return {
            pkm: [] as unknown as pkmInterface, offset: 0, page: 1, search: "", pkmCompleteList: [] as unknown as pkmInterface, pkmFiltredList: [] as unknown as pkmInterface,
            selected: 'null', detailsUrl: '', detailsName: '', detailsCheck: false
        }
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
        searchFilter() {
            return (
                this.pkmCompleteList.filter((element) => {
                    if (element.name?.toLowerCase().includes(this.search.toLowerCase())) {
                        this.pkmFiltredList.push(element)


                        //console.log(JSON.parse(JSON.stringify(element)))    

                    }



                    //console.log(element.name .toLowerCase() .includes(this.search.toLowerCase()))


                }

                ) || []
            )
        },
        typeFilter() {
            let n = 0
            if (this.selected === '1') {
                n = 22
            } else if (this.selected === '2') {
                n = 8
            } else if (this.selected === '3') {
                n = 19
            } else if (this.selected === '4') {
                n = 33
            } else if (this.selected === '5') {
                n = 14
            } else if (this.selected === '6') {
                n = 11
            } else if (this.selected === '7') {
                n = 12
            } else if (this.selected === '8') {
                n = 3
            } else if (this.selected === '9') {
                n = 2
            } else if (this.selected === '10') {
                n = 12
            } else if (this.selected === '11') {
                n = 32
            } else if (this.selected === '12') {
                n = 14
            } else if (this.selected === '13') {
                n = 9
            } else if (this.selected === '14') {
                n = 14
            } else if (this.selected === '15') {
                n = 5
            } else if (this.selected === '16') {
                n = 3
            } else if (this.selected === '17') {
                n = 5
            } else if (this.selected === '18') {
                n = 5
            }
            if (this.selected != null) {
                let i = 0
                let x = 0
                api.get(`/type/${this.selected}/`)
                    .then(response => {

                        this.pkmFiltredList = [{}]
                        response.data.pokemon.map((e: any) => {
                            console.log(e)
                            if (i < n && e.pokemon) {
                                if (x == 0) {
                                    this.pkmFiltredList.splice(0, 1)
                                    x++
                                } else {
                                    this.pkmFiltredList.push(e.pokemon)
                                    i++
                                }
                            }
                        })
                    });
            }
        },
        detailsPush(pokemon: any) {
            this.detailsUrl = pokemon.url
            this.detailsName = pokemon.name
            this.detailsCheck = true
        },

        buttonClose(detailsCheck: any) {
            this.detailsCheck = false
            console.log(detailsCheck)
        },
        cancelBubble(e: Event) {
            e.preventDefault();
            e.stopPropagation()
        }
    },
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

.divBusca {
    margin-left: 36px;
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
.selectFilter {
    padding: 40px;
    select {
        background-color: #F2F2F2;
        box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
        border-radius: 4px;
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

.detailsContainer__off {
    display: hidden;
    background-color: red($color: red);

}.detailsContainer__on {
    display: flex;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 4;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    .detailsContainerContent {
        display: flex;
        align-items: center;
    }
    .detailsComponent {
        position: absolute;
        z-index: 99;
    }
    .buttonDiv {
        display: flex;
        margin-top: -55%;

        width: 800px;
        justify-content: flex-end;
        .detailsButton {
            width: 100px;
            height: 100px;
            background-color: transparent;
            z-index: 99;
        }
    }
}
</style>
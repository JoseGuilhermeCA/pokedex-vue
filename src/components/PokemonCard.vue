<template>
    <div class="card">
        <div class="idPokemon"> {{ pokemonIdSintax(pokemonUrl.id) }} </div>
        <div class="nomePokemon"> {{ name }} </div>
        <div class="tipoPokemon" v-for='type in typeList' :key='type'>
            <div>
                <p>
                    {{ pokemonTypeTranslate(type.type.name) }}
                </p>
            </div>
        </div>

        <div class="foto"> <img src={pokemonUrl.front_default}></div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import axios, { Axios, AxiosInstance } from "axios";
import getPokemonImageUrl from '@/services/api';

export default defineComponent({
    props: {
        name: String,
        url: String,
        img: String
    },
    data() {
        return { pokemonUrl: {} as any, pokemonId: "" as any, pokemonType: "" as any, typeList: [] }
    },
    beforeMount() {
        axios.get(`${this.url}`)
            .then(response => {
                this.pokemonUrl = JSON.parse(JSON.stringify(response.data))
                this.typeList = this.pokemonUrl.types
            })
            .catch(error => {
                console.log(error)
                console.log('nao funcionou iiiiiiiiii')
            })
    },
    methods: {
        pokemonIdSintax(crudeId: number) {
            if (crudeId < 10) {
                
                return `#00${crudeId}`
            } else if (crudeId < 100) {
                return `#0${crudeId}`
            } else if (crudeId < 1000) {
                return `#${crudeId}`
            }

        },

        pokemonTypeTranslate(type: string) {

            if (type === "grass") {
                return "Planta"
            } else if (type == "normal") {
                return "Comum"
            } else if (type == "fighting") {
                return "Lutador"
            } else if (type == "flying") {
                return "Voador"
            } else if (type == "poison") {
                return "Veneno"
            } else if (type == "ground") {
                return "Terrestre"
            } else if (type == "rock") {
                return "Pedra"
            } else if (type == "bug") {
                return "Inseto"
            } else if (type == "ghost") {
                return "Fantasma"
            } else if (type == "stell") {
                return "Metal"
            } else if (type == "fire") {
                return "Fogo"
            } else if (type == "water") {
                return "Agua"
            } else if (type == "electric") {
                return "Eletrico"
            } else if (type == "psychic") {
                return "Psiquico"
            } else if (type == "ice") {
                return "Gelo"
            } else if (type == "dragon") {
                return "Dragão"
            } else if (type == "dark") {
                return "Noturno"
            } else if (type == "fairy") {
                return "Fada"
            } else if (type == "unknown") {
                return "Desconhecido"
            } else if (type == "shadow") {
                return "Sombra"
            }
        },

        getPokemonImageUrlConsume(url: string){
            return getPokemonImageUrl(url)
        }
    }

})
</script>

<style lang="scss">
.card {
    box-sizing: border-box;

    width: 243px;
    height: 165px;

    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: green;

    .idPokemon {
        padding-right: 9px;
        padding-top: 9px;
        display: flex;
        justify-content: flex-end;


    }

    .nomePokemon {
        margin-left: 10px;

    }

    .tipo {
        display: GRID;
        padding-left: 10px;
    }

    .foto {

        img {
            max-width: 80px;
            max-height: 70px;
        }

        padding-bottom: 1px;
        padding-right: 9px;
        display: flex;
        justify-content: flex-end;
    }




}
</style>